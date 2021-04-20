export default function generatePreloadDump(preloadDump) {
  return `window.preloadDump = ${stringLiteral(preloadDump)};`;
}

/**
 * JSON may contain line separators, which are invalid in string literals in older browsers.
 * See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#issue_with_plain_json.stringify_for_use_as_javascript
 * */
function stringLiteral(string) {
  return JSON.stringify(string)
    .replace(/\u2028/g, "\\u2028")
    .replace(/\u2029/g, "\\u2029");
}
