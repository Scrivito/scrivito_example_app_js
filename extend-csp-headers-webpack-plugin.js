const builder = require("content-security-policy-builder");

// This plugin:
// * generate a Content-Security-Policy using [1] based on the file "_headers_csp.json"
// * extend the file "_headers" with the generated Content-Security-Policy
// * removes the now obsolete "_headers_csp.json" from the build folder.
//
// See [1] for all available options regarding CSP generation.
//
// [1] https://www.npmjs.com/package/content-security-policy-builder

function ExtendCspHeadersWebpackPlugin() {
  return {
    apply: compiler => {
      compiler.hooks.emit.tapAsync("ExtendCspHeadersWebpackPlugin", emit);
    },
  };
}

function emit(compilation, callback) {
  const csp = generateCsp(compilation.assets);
  extendHeaders(compilation.assets, csp);
  callback();
}

function generateCsp(assets) {
  const headersCsp = assets["_headers_csp.json"].source().toString();
  delete assets["_headers_csp.json"];
  const directives = JSON.parse(headersCsp);
  return builder({ directives });
}

function extendHeaders(assets, csp) {
  const headers = assets._headers.source().toString();
  const CSP_PLACEHOLDER = "CSP-DIRECTIVES-PLACEHOLDER;";
  if (!headers.includes(CSP_PLACEHOLDER)) {
    throw new Error(
      `_headers doesn't contain '${CSP_PLACEHOLDER}'. Please add the placeholder.`
    );
  }

  const modifiedHeaders = headers.replace(CSP_PLACEHOLDER, csp);

  assets._headers = {
    source: () => modifiedHeaders,
    size: () => modifiedHeaders.length,
  };
}

module.exports = ExtendCspHeadersWebpackPlugin;
