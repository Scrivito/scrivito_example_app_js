const { reportError } = require("./reportError");

exports.visitUrl = async function visitUrl(browser, url) {
  const page = await browser.newPage();
  try {
    await page.goto(url);
  } catch (e) {
    reportError(`🖥️️  Could not visit ${url}! Is a webserver running on 8080?`);
    throw e;
  }

  console.log(`  🖥️️  [visitUrl] Registering console log...`);
  page.on("console", msg => console.log("  🖥️️  [console]", msg.text()));

  return page;
};
