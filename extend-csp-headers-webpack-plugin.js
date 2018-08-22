function ExtendCspHeadersWebpackPlugin() {
  return {
    apply: compiler => {
      compiler.hooks.emit.tapAsync("ExtendCspHeadersWebpackPlugin", emit);
    },
  };
}

function emit(compilation, callback) {
  const headers = compilation.assets._headers.source().toString();
  const headersCsp = compilation.assets._headers_csp.source().toString();
  const headersCspScriptSrc = compilation.assets._headers_csp_script_src
    .source()
    .toString();
  const CSP_PLACEHOLDER = "Content-Security-Policy-PLACEHOLDER;";
  const SCRIPT_SRC_PLACEHOLDER = "script-src-PLACEHOLDER;";

  if (!headers.includes(CSP_PLACEHOLDER)) {
    throw new Error(
      `_headers doesn't contain '${CSP_PLACEHOLDER}'. Please add the placeholder.`
    );
  }

  if (!headersCsp.includes(SCRIPT_SRC_PLACEHOLDER)) {
    throw new Error(
      `_headers_csp doesn't contain '${SCRIPT_SRC_PLACEHOLDER}'. Please add the placeholder.`
    );
  }

  const scriptSrcArray = splitByLine(headersCspScriptSrc);
  scriptSrcArray.unshift("script-src");
  const scriptSrc = `${scriptSrcArray.join(" ")};`;

  const modifiedCspHeader = headersCsp.replace(
    SCRIPT_SRC_PLACEHOLDER,
    scriptSrc
  );
  const cspArray = splitByLine(modifiedCspHeader);
  cspArray.unshift("Content-Security-Policy:");
  const cspLine = cspArray.join(" ");

  const modifiedHeaders = headers.replace(CSP_PLACEHOLDER, cspLine);

  compilation.assets._headers = {
    source: () => modifiedHeaders,
    size: () => modifiedHeaders.length,
  };

  delete compilation.assets._headers_csp;
  delete compilation.assets._headers_csp_script_src;

  callback();
}

function splitByLine(string) {
  return string.split(/\r?\n/).filter(item => item);
}

module.exports = ExtendCspHeadersWebpackPlugin;
