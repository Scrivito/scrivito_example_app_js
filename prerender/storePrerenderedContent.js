const express = require("express");
const filesize = require("filesize");
const fse = require("fs-extra");
const path = require("path");
const puppeteer = require("puppeteer");

const { extendRedirects } = require("./extendRedirects");
const { reportError } = require("./reportError");

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
  await page.evaluate("prerenderContent()");
  log("🖥️️  Executed javascript command prerenderContent.");

  log("🖥️️  Closing the browser...");
  await browser.close();

  log("🗄️  Closing express server...");
  await server.close();

  await extendRedirects(TARGET_DIR, storedFiles, SOURCE_DIR);

  log(
    `📦 Added ${storedFiles.length} files to and` +
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
  console.log(
    `  📥 [storeResult] Storing "${filename}" (file size: ${filesize(
      content.length
    )})...`
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

function log(message, ...args) {
  console.log(`[storePrerenderedContent] ${message}`, ...args);
}

storePrerenderedContent().catch(e => {
  reportError("An error occurred!", e);
  process.exitCode = 1;
});
