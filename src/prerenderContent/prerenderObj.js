/* eslint no-console: "off" */
import * as React from "react";
import * as ReactDOMServer from "react-dom/server";
import * as Scrivito from "scrivito";
import Helmet from "react-helmet";
import App from "../App";
import filenameFromUrl from "./filenameFromUrl";
import generateHtml from "./generateHtml";
import generatePreloadDump from "./generatePreloadDump";

export default async function prerenderObj(obj) {
  // Tell helmet to pretend to run on a node server, not in a browser
  // See https://github.com/nfl/react-helmet/issues/310 for details
  Helmet.canUseDOM = false;

  const { result, preloadDump } = await Scrivito.renderPage(obj, () => {
    const bodyContent = ReactDOMServer.renderToStaticMarkup(<App />);
    const helmet = Helmet.renderStatic();

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
      filename: filenameFromUrl(objUrl),
      content: generateHtml({
        objId,
        htmlAttributes,
        headContent,
        bodyAttributes,
        bodyContent,
        preloadDumpFileName,
      }),
    },
    {
      filename: preloadDumpFileName,
      content: generatePreloadDump(preloadDump),
    },
  ];
}
