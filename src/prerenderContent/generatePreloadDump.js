export default function generatePreloadDump(preloadDump) {
  return `window.preloadDump = ${JSON.stringify(preloadDump)};`;
}
