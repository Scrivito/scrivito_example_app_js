const express = require("express");
const fse = require("fs-extra");
const path = require("path");
const puppeteer = require("puppeteer");

const TARGET_DIR = "buildPrerendered";

async function storePrerenderedContent() {
  console.time("[storePrerenderedContent]");

  log(`Removing ${TARGET_DIR}/`);
  fse.removeSync(TARGET_DIR);

  log(`Copying build/ to ${TARGET_DIR}/`);
  fse.copySync("build", TARGET_DIR);

  let filesRemoved = 0;
  ["_prerender_content.html", "prerender_content.js"].forEach(filename => {
    log(`✨ Removing now obsolete file ${filename}...`);
    fse.removeSync(`${TARGET_DIR}/${filename}`);
    filesRemoved += 1;
  });

  log("🗄️  Starting express server...");
  const server = await startServer();
  log("🗄️  Express server started...");

  log("🖥️️  Starting browser...");
  const browser = await puppeteer.launch();
  log("🖥️️  Browser started");

  const prerenderedContent = await executeInBrowser(
    browser,
    "http://localhost:8080/_prerender_content.html",
    () => prerenderContent()
  );
  const filesReceived = prerenderedContent.length;
  log(`🖥️️  Received ${filesReceived} files. Now storing...`);
  const filesAdded = storeResults(prerenderedContent);

  log("🖥️️  Closing the browser...");
  await browser.close();

  log("🗄️  Closing express server...");
  await server.close();

  log(
    `📦 Added ${filesAdded} file to and` +
      ` removed ${filesRemoved} files from folder ${TARGET_DIR}!`
  );

  console.timeEnd("[storePrerenderedContent]");
}

async function executeInBrowser(browser, url, jsCommand) {
  logBrowser(`Visiting ${url} ...`);
  const page = await browser.newPage();
  page.on("console", msg => logBrowser("[console]", msg.text()));
  try {
    await page.goto(url);
  } catch (e) {
    logBrowser(`❌  Could not visit ${url}! Is a webserver running on 8080?`);
    throw e;
  }

  logBrowser("Executing javascript command...");
  const result = await page.evaluate(jsCommand);
  logBrowser("Executed javascript command.");

  return result;
}

function startServer() {
  const app = express();
  const staticMiddleware = express.static("build");
  app.use(staticMiddleware);

  return new Promise(resolve => {
    const server = app.listen(8080, () => resolve(server));
  });
}

function storeResults(results) {
  let filesAdded = 0;

  results.forEach(({ filename, content }) => {
    const filePath = path.join(TARGET_DIR, filename);
    if (!path.normalize(filePath).startsWith(`${TARGET_DIR}`)) {
      logStoreResults(`❌ filename "${filename}" is invalid! Skipping file...`);
      return;
    }
    if (fse.existsSync(filePath)) {
      logStoreResults(
        `❌ filename "${filename}" already exists in build! Skipping file...`
      );
      return;
    }

    logStoreResults(`Storing "${filename}"...`);
    fse.outputFileSync(filePath, content);
    filesAdded += 1;
  });

  return filesAdded;
}

function log(message, ...args) {
  console.log(`[storePrerenderedContent] ${message}`, ...args);
}

function logBrowser(message, ...args) {
  console.log(`  [executeInBrowser] 🖥️️  ${message}`, ...args);
}

function logStoreResults(message, ...args) {
  console.log(`  [storeResults] ${message}`, ...args);
}

storePrerenderedContent().catch(e => {
  log("❌ An error occurred!", e);
  process.exit(1);
});
