function ExtendCspHeadersWebpackPlugin() {
  return {
    apply: compiler => {
      compiler.hooks.emit.tapAsync("ExtendCspHeadersWebpackPlugin", emit);
    },
  };
}

function emit(compilation, callback) {
  const scriptSrc = generateScriptSrc(compilation.assets);
  const csp = generateCsp(compilation.assets, scriptSrc);
  extendHeaders(compilation.assets, csp);
  callback();
}

function generateScriptSrc(assets) {
  const headersCspScriptSrc = assets._headers_csp_script_src
    .source()
    .toString();
  delete assets._headers_csp_script_src;
  const scriptSrcArray = splitByLine(headersCspScriptSrc);
  scriptSrcArray.unshift("script-src");
  return `${scriptSrcArray.join(" ")};`;
}

function generateCsp(assets, scriptSrc) {
  const headersCsp = assets._headers_csp.source().toString();
  delete assets._headers_csp;
  const SCRIPT_SRC_PLACEHOLDER = "script-src-PLACEHOLDER;";
  if (!headersCsp.includes(SCRIPT_SRC_PLACEHOLDER)) {
    throw new Error(
      `_headers_csp doesn't contain '${SCRIPT_SRC_PLACEHOLDER}'. Please add the placeholder.`
    );
  }
  const modifiedCspHeader = headersCsp.replace(
    SCRIPT_SRC_PLACEHOLDER,
    scriptSrc
  );
  const cspArray = splitByLine(modifiedCspHeader);
  cspArray.unshift("Content-Security-Policy:");
  return cspArray.join(" ");
}

function extendHeaders(assets, csp) {
  const headers = assets._headers.source().toString();
  const CSP_PLACEHOLDER = "Content-Security-Policy-PLACEHOLDER;";
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

function splitByLine(string) {
  return string.split(/\r?\n/).filter(item => item);
}

module.exports = ExtendCspHeadersWebpackPlugin;
