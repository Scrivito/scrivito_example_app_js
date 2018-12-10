const express = require("express");
const filesize = require("filesize");
const fse = require("fs-extra");
const path = require("path");
const puppeteer = require("puppeteer");

const SOURCE_DIR = "build";
const TARGET_DIR = "buildPrerendered";

const storedFiles = [];

async function storePrerenderedContent() {
  console.time("[storePrerenderedContent]");

  log(`Removing ${TARGET_DIR}/`);
  await fse.remove(TARGET_DIR);

  log(`Copying ${SOURCE_DIR}/ to ${TARGET_DIR}/`);
  await fse.copy(SOURCE_DIR, TARGET_DIR);

  let filesRemoved = 0;
  await Promise.all(
    ["_prerender_content.html", "prerender_content.js"].map(async filename => {
      log(`✨ Removing now obsolete file ${filename}...`);
      await fse.remove(`${TARGET_DIR}/${filename}`);
      filesRemoved += 1;
    })
  );

  log("🗄️  Starting express server...");
  const server = await startServer();
  log("🗄️  Express server started...");

  log("🖥️️  Starting browser...");
  const browser = await puppeteer.launch();
  log("🖥️️  Browser started");

  const url = "http://localhost:8080/_prerender_content.html";
  log(`🖥️️  Visiting ${url} ...`);
  const page = await visitUrl(browser, url);

  log(`🖥️️  Redefining window.storeResult...`);
  await page.exposeFunction("storeResult", storeResult);

  log(`🖥️️  Redefining window.reportError...`);
  await page.exposeFunction("reportError", reportError);

  log("🖥️️  Executing javascript command prerenderContent...");
  await page.evaluate(() => prerenderContent());
  log("🖥️️  Executed javascript command prerenderContent.");

  log("🖥️️  Closing the browser...");
  await browser.close();

  log("🗄️  Closing express server...");
  await server.close();

  await extendRedirects(storedFiles);

  log(
    `📦 Added ${storedFiles.length} file to and` +
      ` removed ${filesRemoved} files from folder ${TARGET_DIR}!`
  );

  console.timeEnd("[storePrerenderedContent]");
}

function startServer() {
  const app = express();
  const staticMiddleware = express.static(SOURCE_DIR);
  app.use(staticMiddleware);

  return new Promise(resolve => {
    const server = app.listen(8080, () => resolve(server));
  });
}

async function visitUrl(browser, url) {
  const page = await browser.newPage();
  try {
    await page.goto(url);
  } catch (e) {
    reportError(`🖥️️  Could not visit ${url}! Is a webserver running on 8080?`);
    throw e;
  }

  log(`🖥️️  Registering console log...`);
  page.on("console", msg => console.log("  🖥️️  [console]", msg.text()));

  return page;
}

async function storeResult({ filename, content }) {
  const filePath = path.join(TARGET_DIR, filename);
  if (!path.normalize(filePath).startsWith(`${TARGET_DIR}`)) {
    reportError(`filename "${filename}" is invalid! Skipping file...`);
    return;
  }
  logStoreResult(
    `Storing "${filename}" (file size: ${filesize(content.length)})...`
  );
  try {
    await fse.outputFile(filePath, content, { flag: "wx" });
    storedFiles.push(filePath.substring(TARGET_DIR.length));
  } catch (e) {
    if (e.code === "EEXIST") {
      reportError(
        `Filename "${filename}" already exists in ${TARGET_DIR}! Skipping file...`
      );
    } else {
      throw e;
    }
  }
}

function reportError(message, ...args) {
  // Report to your external error tracker here, like Honeybadger or Rollbar.
  console.log(`  ❌ [reportError] ${message}`, ...args);
}

function log(message, ...args) {
  console.log(`[storePrerenderedContent] ${message}`, ...args);
}

function logStoreResult(message, ...args) {
  console.log(`  📥 [storeResult] ${message}`, ...args);
}

// Netlify does normalize urls automatically.
// An Url, that contains upper case characters is automatically converted to lower case.
// But Scrivito is case-sensitive for routing and will no longer recognize the lower cased route.
// By explicitly adding the uppercase url to "_redirects" netlify will not longer normalize the Url.
async function extendRedirects(prerenderedFiles) {
  const explicitRedirects = prerenderedFiles
    .filter(f => f.endsWith(".html") && f.toLowerCase() !== f)
    .map(file => `${file.substring(0, file.length - 5)} ${file} 200`);
  const sourceRedirects = await fse.readFile(
    `${SOURCE_DIR}/_redirects`,
    "utf8"
  );
  const placeholder = "# PRERENDERED-UPPERCASE-ROUTES-PLACEHOLDER";
  if (sourceRedirects.indexOf(placeholder) === -1) {
    throw new Error(
      `The following placeholder is missing in _redirects:
      ${placeholder}`
    );
  }
  const extendedRedirects = sourceRedirects.replace(
    placeholder,
    explicitRedirects.join("\n")
  );
  const target = `${TARGET_DIR}/_redirects`;
  await fse.writeFile(target, extendedRedirects, "utf8");
  log(`📦 Extended ${target} with ${explicitRedirects.length} entries.`);
}

storePrerenderedContent().catch(e => {
  reportError("An error occurred!", e);
  process.exitCode = 1;
});
