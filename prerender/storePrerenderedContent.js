const path = require("path");
const fse = require("fs-extra");
const puppeteer = require("puppeteer");

const { extendRedirects } = require("./extendRedirects");
const { reportError } = require("./reportError");
const { startServer } = require("./startServer");
const { storeResult } = require("./storeResult");
const { visitUrl } = require("./visitUrl");

const SOURCE_DIR = "build";
const SERVER_DIR = "buildPrerendering";
const TARGET_DIR = "buildPrerendered";

async function storePrerenderedContent() {
  console.time("[storePrerenderedContent]");

  const storedFiles = [];

  log(`Removing ${TARGET_DIR}/`);
  await fse.remove(TARGET_DIR);

  log(`Copying ${SOURCE_DIR}/ to ${TARGET_DIR}/`);
  await fse.copy(SOURCE_DIR, TARGET_DIR);
  await fse.remove(path.join(TARGET_DIR, "asset-manifest.json"));

  log("🗄️  Starting express server...");
  const server = await startServer(SERVER_DIR);
  log("🗄️  Express server started...");

  try {
    log("🖥️️  Starting browser...");
    const browser = await puppeteer.launch();
    log("🖥️️  Browser started");

    try {
      const url = "http://localhost:8080/_prerender_content.html";
      log(`🖥️️  Visiting ${url} ...`);
      const page = await visitUrl(browser, url);

      log(`🖥️️  Redefining window.storeResult...`);
      await page.exposeFunction("storeResult", (args) =>
        storeResult(TARGET_DIR, storedFiles, args)
      );

      log(`🖥️️  Redefining window.reportError...`);
      await page.exposeFunction("reportError", reportError);

      log("🖥️️  Executing javascript command prerenderContent...");
      await page.evaluate("prerenderContent()");
      log("🖥️️  Executed javascript command prerenderContent.");

      await extendRedirects(TARGET_DIR, storedFiles, SOURCE_DIR);

      log(`📦 Added ${storedFiles.length} files to ${TARGET_DIR}!`);
    } finally {
      log("🖥️️  Closing the browser...");
      await browser.close();
    }
  } finally {
    log("🗄️  Closing express server...");
    await server.close();
  }

  console.timeEnd("[storePrerenderedContent]");
}

function log(message, ...args) {
  console.log(`[storePrerenderedContent] ${message}`, ...args);
}

storePrerenderedContent().catch((e) => {
  reportError("An error occurred!", e);
  process.exitCode = 1;
});
