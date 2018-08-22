const fs = require("fs");

function ExtendCspHeadersWebpackPlugin() {
  return {
    apply: compiler => {
      compiler.hooks.emit.tapAsync("ExtendCspHeadersWebpackPlugin", emit);
    },
  };
}

function emit(compilation, callback) {
  const cspConfig = fs.readFileSync("./src/_csp", "utf8");
  const cspTitle = "Content-Security-Policy:";

  if (cspConfig) {
    let domains = "";
    const cspWhitelist = fs.readFileSync("./src/_csp_whitelist", "utf8");
    if (cspWhitelist) {
      domains = cspWhitelist.replace(/\n/g, " ");
    }
    const cspWarnings = cspConfig
      .replace("{{domains}}", domains)
      .replace(/\n/g, " ");
    const cspHeader = `${cspTitle} ${cspWarnings}`;

    compilation.assets._headers = {
      source: () => cspHeader,
      size: () => cspHeader.length,
    };
    callback();
  }
}

module.exports = ExtendCspHeadersWebpackPlugin;
