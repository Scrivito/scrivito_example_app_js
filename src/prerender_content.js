import "react";
import "react-dom";
import "scrivito";
import "./Objs";
import "./Widgets";
import "./config";
import prerenderObjs from "./prerenderContent/prerenderObjs";
import prerenderSitemap from "./prerenderContent/prerenderSitemap";

const PRERENDER_BLACKLIST_OBJ_CLASSES = [
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
  const prerenderedObjs = await prerenderObjs(PRERENDER_BLACKLIST_OBJ_CLASSES);
  const sitemap = await prerenderSitemap(SITEMAP_OBJ_CLASSES_WHITELIST);
  return [...prerenderedObjs, ...sitemap];
}

// Usage: window.prerenderContent().then(results => ...);
window.prerenderContent = prerenderContent;
