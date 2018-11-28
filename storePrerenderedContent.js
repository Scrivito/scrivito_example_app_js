const express = require("express");
const fse = require("fs-extra");
const path = require("path");
const puppeteer = require("puppeteer");

const SOURCE_DIR = "build";
const TARGET_DIR = "buildPrerendered";

let filesAdded = 0;

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

  log("🖥️️  Executing javascript command prerenderContent...");
  await page.evaluate(() => prerenderContent());
  log("🖥️️  Executed javascript command prerenderContent.");

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

async function visitUrl(browser, url) {
  const page = await browser.newPage();
  try {
    await page.goto(url);
  } catch (e) {
    log(`🖥️️  ❌  Could not visit ${url}! Is a webserver running on 8080?`);
    throw e;
  }

  log(`🖥️️  Registering console log...`);
  page.on("console", msg => console.log("  🖥️️  [console]", msg.text()));

  return page;
}

function startServer() {
  const app = express();
  const staticMiddleware = express.static(SOURCE_DIR);
  app.use(staticMiddleware);

  return new Promise(resolve => {
    const server = app.listen(8080, () => resolve(server));
  });
}

async function storeResult({ filename, content }) {
  const filePath = path.join(TARGET_DIR, filename);
  if (!path.normalize(filePath).startsWith(`${TARGET_DIR}`)) {
    logStoreResult(`❌ filename "${filename}" is invalid! Skipping file...`);
    return;
  }
  const fileAlreadyExists = await fse.exists(filePath);
  if (fileAlreadyExists) {
    logStoreResult(
      `❌ filename "${filename}" already exists in ${TARGET_DIR}! Skipping file...`
    );
    return;
  }

  logStoreResult(`Storing "${filename}"...`);
  await fse.outputFile(filePath, content);
  filesAdded += 1;
}

function log(message, ...args) {
  console.log(`[storePrerenderedContent] ${message}`, ...args);
}

function logStoreResult(message, ...args) {
  console.log(`  📥 [storeResult] ${message}`, ...args);
}

storePrerenderedContent().catch(e => {
  log("❌ An error occurred!", e);
  process.exit(1);
});
