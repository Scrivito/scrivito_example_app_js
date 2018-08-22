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

  if (!headers.includes("Content-Security-Policy-PLACEHOLDER;")) {
    throw new Error(
      "_headers doesn't contain 'Content-Security-Policy-PLACEHOLDER;'. Please add the placeholder."
    );
  }

  if (!headersCsp.includes("script-src-PLACEHOLDER;")) {
    throw new Error(
      "_headers_csp doesn't contain 'script-src-PLACEHOLDER;'. Please add the placeholder."
    );
  }

  const scriptSrcArray = splitByLine(headersCspScriptSrc);
  scriptSrcArray.unshift("script-src");
  const scriptSrc = `${scriptSrcArray.join(" ")};`;

  const modifiedCspHeader = headersCsp.replace(
    "script-src-PLACEHOLDER;",
    scriptSrc
  );
  const cspArray = splitByLine(modifiedCspHeader);
  cspArray.unshift("Content-Security-Policy:");
  const cspLine = cspArray.join(" ");

  const modifiedHeaders = headers.replace(
    "Content-Security-Policy-PLACEHOLDER;",
    cspLine
  );

  compilation.assets["_headers"] = {
    source: () => modifiedHeaders,
    size: () => modifiedHeaders.length,
  };

  delete compilation.assets["_headers_csp"];
  delete compilation.assets["_headers_csp_script_src"];

  callback();
}

function splitByLine(string) {
  return string.split(/\r?\n/).filter(item => item);
}

module.exports = ExtendCspHeadersWebpackPlugin;
