const fse = require("fs-extra");
const nodeUrl = require("url");
const puppeteer = require("puppeteer");
const Webpack = require("webpack");
const WebpackDevServer = require("webpack-dev-server");
const webpackConfig = require("./webpack.config.js");

const TARGET_DIR = "build_static";

async function staticExport() {
  console.time("[staticExport]");

  console.log(`[staticExport] Removing ${TARGET_DIR}/`);
  fse.removeSync(TARGET_DIR);

  console.log(`[staticExport] Copying build/ to ${TARGET_DIR}/`);
  fse.copySync("build", TARGET_DIR);

  let filesAdded = 0;

  console.log("[staticExport] 🗄️  Starting webpack-dev-server...");
  const server = await startServer();
  console.log("[staticExport] 🗄️  webpack-dev-server started...");

  console.log("[staticExport] 🖥️️  Starting browser...");
  const browser = await puppeteer.launch();
  console.log("[staticExport] 🖥️️  Browser started");

  const exportedObjs = await executeInBrowser(
    browser,
    "http://localhost:8080/_export_objs.html",
    () => exportObjs()
  );
  console.log(`[staticExport] 🖥️️  Received ${exportedObjs.length} objs.`);

  console.log(
    `[staticExport] Writing ${exportedObjs.length} html files to disk...`
  );
  writeObjsToDisk(exportedObjs);
  filesAdded += exportedObjs.length;

  console.log("[staticExport] 🖥️️  Closing the browser...");
  await browser.close();

  console.log("[staticExport] 🗄️  Closing webpack-dev-server...");
  await closeServer(server);

  console.log(
    `[staticExport] 📦 Added ${filesAdded} files to files from folder ${TARGET_DIR}!`
  );

  console.timeEnd("[staticExport]");
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
  const compiler = Webpack(
    webpackConfig({
      disableProgressBarPlugin: true,
      disableReactDevtools: true,
    })
  );
  const server = new WebpackDevServer(compiler, {
    ...webpackConfig.devServer,
    quiet: true,
  });

  return new Promise((resolve, _reject) => {
    server.listen(8080, "localhost", () => resolve(server));
  });
}

function closeServer(server) {
  return new Promise((resolve, _reject) => {
    server.close(resolve);
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

staticExport().catch(e => {
  console.log("❌ An error occurred!", e);
  process.exit(1);
});
