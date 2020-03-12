/* eslint no-console: "off" */
import * as React from "react";
import * as ReactDOMServer from "react-dom/server";
import * as Scrivito from "scrivito";
import { HelmetProvider } from "react-helmet-async";

import App, { helmetContext } from "../App";
import filenameFromUrl from "./filenameFromUrl";
import generateHtml from "./generateHtml";
import generatePreloadDump from "./generatePreloadDump";

export default async function prerenderObj(obj) {
  HelmetProvider.canUseDOM = false;

  const { result, preloadDump } = await Scrivito.renderPage(obj, () => {
    const bodyContent = ReactDOMServer.renderToString(<App />);
    const { helmet } = helmetContext;

    return {
      objId: obj.id(),
      objUrl: Scrivito.urlFor(obj),
      htmlAttributes: helmet.htmlAttributes.toString(),
      headContent: `
          ${helmet.title.toString()}
          ${helmet.meta.toString()}
          ${helmet.link.toString()}
        `,
      bodyAttributes: helmet.bodyAttributes.toString(),
      bodyContent,
    };
  });

  const {
    objId,
    objUrl,
    htmlAttributes,
    headContent,
    bodyAttributes,
    bodyContent,
  } = result;
  const preloadDumpFileName = `/preloadDump-${objId}.js`;

  return [
    {
      filename: preloadDumpFileName,
      content: generatePreloadDump(preloadDump),
    },
    {
      filename: filenameFromUrl(objUrl),
      content: await generateHtml({
        objId,
        htmlAttributes,
        headContent,
        bodyAttributes,
        bodyContent,
        preloadDumpFileName,
      }),
    },
  ];
}
