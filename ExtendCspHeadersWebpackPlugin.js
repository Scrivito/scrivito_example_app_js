const builder = require("content-security-policy-builder");

// This plugin:
// * generate a Content-Security-Policy using [1] based on the file "_headersCsp.json"
// * extend the file "_headers" with the generated Content-Security-Policy
// * removes the now obsolete "_headersCsp.json" from the build folder.
//
// See [1] for all available options regarding CSP generation.
//
// [1] https://www.npmjs.com/package/content-security-policy-builder

function ExtendCspHeadersWebpackPlugin() {
  return {
    apply: compiler => {
      compiler.hooks.emit.tapPromise("ExtendCspHeadersWebpackPlugin", emit);
    },
  };
}

function emit(compilation) {
  return new Promise(resolve => {
    const assets = compilation.assets;
    if (!assets["_headers"] || !assets["_headersCsp.json"]) {
      return resolve();
    }
    const csp = generateCsp(assets);
    extendHeaders(assets, csp);
    return resolve();
  });
}

function generateCsp(assets) {
  const headersCsp = assets["_headersCsp.json"].source().toString();
  delete assets["_headersCsp.json"];
  const directives = JSON.parse(headersCsp);
  return builder({ directives });
}

function extendHeaders(assets, csp) {
  const headers = assets["_headers"].source().toString();
  const CSP_PLACEHOLDER = "CSP-DIRECTIVES-PLACEHOLDER;";
  if (!headers.includes(CSP_PLACEHOLDER)) {
    throw new Error(
      `_headers doesn't contain '${CSP_PLACEHOLDER}'. Please add the placeholder.`
    );
  }

  const modifiedHeaders = headers.replace(CSP_PLACEHOLDER, csp);

  assets["_headers"] = {
    source: () => modifiedHeaders,
    size: () => modifiedHeaders.length,
  };
}

module.exports = ExtendCspHeadersWebpackPlugin;
