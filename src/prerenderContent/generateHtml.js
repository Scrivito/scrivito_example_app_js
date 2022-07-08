export async function generateHtml({
  objId,
  htmlAttributes,
  headContent,
  bodyAttributes,
  bodyContent,
  preloadDumpFileName,
  assetManifest,
}) {
  return `<!DOCTYPE html>
<html ${htmlAttributes}>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta
      name="generator"
      content="Scrivito by JustRelate Group GmbH (scrivito.com)"
    />
    ${headContent}
    <link rel="preconnect" href="https://api.scrivito.com" crossorigin />
    <link rel="preconnect" href="https://api.scrivito.com" />
    <link rel="preconnect" href="https://cdn0.scrvt.com" />
    <link rel="stylesheet" href="${assetManifest["index.css"]}" />

    <script src="/js_snippets_head.js"></script>
  </head>
  <body ${bodyAttributes}>
    <div id="application" data-scrivito-prerendering-obj-id="${objId}">${bodyContent}</div>
    <script src="${preloadDumpFileName}"></script>
    <script async src="${assetManifest["index.js"]}"></script>
    <script src="/js_snippets_before_body_end.js"></script>
  </body>
</html>
`;
}
