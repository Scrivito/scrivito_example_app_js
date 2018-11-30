/* eslint no-console: "off" */
import "react";
import "react-dom";
import "scrivito";
import filesize from "filesize";
import "./Objs";
import "./Widgets";
import "./config";
import prerenderObjs from "./prerenderContent/prerenderObjs";
import prerenderSitemap from "./prerenderContent/prerenderSitemap";

const PRERENDER_OBJ_CLASSES_BLACKLIST = [
  "Download",
  "Image",
  "Redirect",
  "Video",
];

const SITEMAP_OBJ_CLASSES_WHITELIST = [
  "Author",
  "Blog",
  "BlogPost",
  "Event",
  "Homepage",
  "Job",
  "LandingPage",
  "Page",
];

async function prerenderContent() {
  await prerenderSitemap(SITEMAP_OBJ_CLASSES_WHITELIST, window.storeResult);
  await prerenderObjs(
    PRERENDER_OBJ_CLASSES_BLACKLIST,
    window.storeResult,
    window.reportError
  );
}

// The following method will be overwritten by puppeteer in storePrerenderedContent.
// It is only here, to simplify debugging in the browser
window.storeResult = async ({ filename, content }) => {
  console.log(
    `[storeResult] received "${filename}" (file size: ${filesize(
      content.length
    )})`
  );
};

// The following method will be overwritten by puppeteer in storePrerenderedContent.
// It is only here, to simplify debugging in the browser
window.reportError = (message, ...args) => {
  console.log(`[reportError] ${message}`, ...args);
};

// Usage: window.prerenderContent().then(results => ...);
window.prerenderContent = prerenderContent;
