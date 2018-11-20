const express = require("express");
const fse = require("fs-extra");
const nodeUrl = require("url");
const puppeteer = require("puppeteer");

const TARGET_DIR = "buildPrerendered";

async function storePrerenderedContent() {
  console.time("[storePrerenderedContent]");

  console.log(`[storePrerenderedContent] Removing ${TARGET_DIR}/`);
  fse.removeSync(TARGET_DIR);

  console.log(`[storePrerenderedContent] Copying build/ to ${TARGET_DIR}/`);
  fse.copySync("build", TARGET_DIR);

  let filesAdded = 0;

  console.log("[storePrerenderedContent] 🗄️  Starting express server...");
  const server = await startServer();
  console.log("[storePrerenderedContent] 🗄️  Express server started...");

  console.log("[storePrerenderedContent] 🖥️️  Starting browser...");
  const browser = await puppeteer.launch();
  console.log("[storePrerenderedContent] 🖥️️  Browser started");

  const exportedObjs = await executeInBrowser(
    browser,
    "http://localhost:8080/_prerender_content.html",
    () => prerenderContent()
  );
  console.log(
    `[storePrerenderedContent] 🖥️️  Received ${exportedObjs.length} objs.`
  );

  console.log(
    `[storePrerenderedContent] Writing ${
      exportedObjs.length
    } html files to disk...`
  );
  writeObjsToDisk(exportedObjs);
  filesAdded += exportedObjs.length;

  console.log("[storePrerenderedContent] 🖥️️  Closing the browser...");
  await browser.close();

  console.log("[storePrerenderedContent] 🗄️  Closing express server...");
  await server.close();

  console.log(
    `[storePrerenderedContent] 📦 Added ${filesAdded} files to files from folder ${TARGET_DIR}!`
  );

  console.timeEnd("[storePrerenderedContent]");
}

async function executeInBrowser(browser, url, jsCommand) {
  console.log(`  [executeInBrowser] 🖥️️  Visiting ${url} ...`);
  const page = await browser.newPage();
  page.on("console", msg =>
    console.log("  [executeInBrowser]   🖥️️  [console]", msg.text())
  );
  try {
    await page.goto(url);
  } catch (e) {
    console.log(
      `  [executeInBrowser] 🖥️️  ❌  Could not visit ${url} !` +
        " Is a webserver running on 8080?"
    );
    throw e;
  }

  console.log("  [executeInBrowser] 🖥️️  Executing javascript command...");
  const result = await page.evaluate(jsCommand);
  console.log(`  [executeInBrowser] 🖥️️  Executed javascript command.`);

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

function writeObjsToDisk(results) {
  results.forEach(result => {
    const {
      objId,
      objUrl,
      htmlContent,
      preloadDumpContent,
      preloadDumpFileName,
    } = result;
    const fileName = filenameFromUrl(objUrl);

    console.log(
      `  [writeObjsToDisk] Writing ${fileName} (${objId}) to disk...`
    );
    fse.outputFileSync(`${TARGET_DIR}/${fileName}`, htmlContent);

    console.log(
      `  [writeObjsToDisk] Writing /${preloadDumpFileName} to disk...`
    );
    fse.outputFileSync(
      `${TARGET_DIR}/${preloadDumpFileName}`,
      preloadDumpContent
    );
  });
}

function filenameFromUrl(url) {
  const uri = nodeUrl.parse(url);
  const pathname = uri.pathname;
  if (pathname === "/") {
    return "/index.html";
  }

  return `${pathname}.html`;
}

storePrerenderedContent().catch(e => {
  console.log("❌ An error occurred!", e);
  process.exit(1);
});
