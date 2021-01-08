const path = require("path");
const fse = require("fs-extra");
const puppeteer = require("puppeteer");

const { extendRedirects } = require("./extendRedirects");
const { reportError } = require("./reportError");
const { startServer } = require("./startServer");
const { storeResult } = require("./storeResult");
const { visitUrl } = require("./visitUrl");

const SOURCE_DIR = "build";
const TARGET_DIR = "buildPrerendered";

async function storePrerenderedContent() {
  console.time("[storePrerenderedContent]");

  const storedFiles = [];

  log(`Removing ${TARGET_DIR}/`);
  await fse.remove(TARGET_DIR);

  log(`Copying ${SOURCE_DIR}/ to ${TARGET_DIR}/`);
  await fse.copy(SOURCE_DIR, TARGET_DIR);

  const assetManifest = await fse.readJson(
    path.join(SOURCE_DIR, "asset-manifest.json")
  );
  let filesRemoved = 0;
  const filesToBeRemoved = ["asset-manifest.json", "_prerender_content.html"];
  filesToBeRemoved.push(assetManifest["prerender_content.css"]);
  const prerenderContentJsPath = assetManifest["prerender_content.js"];
  filesToBeRemoved.push(
    prerenderContentJsPath,
    `${prerenderContentJsPath}.LICENSE.txt`
  );

  await Promise.all(
    filesToBeRemoved.map(async (filename) => {
      log(`✨ Removing now obsolete file ${filename}...`);
      await fse.remove(path.join(TARGET_DIR, filename));
      filesRemoved += 1;
    })
  );

  log("🗄️  Starting express server...");
  const server = await startServer(SOURCE_DIR);
  log("🗄️  Express server started...");

  log("🖥️️  Starting browser...");
  let browser;
  try {
    browser = await puppeteer.launch();
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
  log("🖥️️  Browser started");

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

function log(message, ...args) {
  console.log(`[storePrerenderedContent] ${message}`, ...args);
}

storePrerenderedContent().catch((e) => {
  reportError("An error occurred!", e);
  process.exitCode = 1;
});
