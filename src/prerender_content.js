import "react";
import "react-dom";
import "scrivito";
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
  const sitemap = await prerenderSitemap(SITEMAP_OBJ_CLASSES_WHITELIST);
  const prerenderedObjs = await prerenderObjs(PRERENDER_OBJ_CLASSES_BLACKLIST);
  return [...prerenderedObjs, ...sitemap];
}

// Usage: window.prerenderContent().then(results => ...);
window.prerenderContent = prerenderContent;
