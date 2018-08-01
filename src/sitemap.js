import * as Scrivito from "scrivito";
import xml from "xml";
import "./Objs";
import "./config";
import formatDate from "./utils/formatDate";

const OBJ_CLASSES_WHITELIST = [
  "Author",
  "Blog",
  "BlogPost",
  "Event",
  "Homepage",
  "Job",
  "LandingPage",
  "Page"
];

function sitemapXml() {
  const pages = [
    ...Scrivito.Obj.where("_objClass", "equals", OBJ_CLASSES_WHITELIST).andNot(
      "robotsIndex",
      "equals",
      "no"
    )
  ];
  const sitemapUrls = pages.map(pageToSitemapUrl);

  return xml(
    {
      urlset: [
        { _attr: { xmlns: "http://www.sitemaps.org/schemas/sitemap/0.9" } },
        ...sitemapUrls
      ]
    },
    { declaration: true }
  );
}

function pageToSitemapUrl(page) {
  return {
    url: [
      { loc: Scrivito.urlFor(page) },
      { lastmod: formatDate(page.lastChanged(), "yyyy-mm-dd") }
    ]
  };
}

function writeXmlContentToExtract(content) {
  const metaTag = document.getElementsByName("scrivito-content-to-extract")[0];
  metaTag.setAttribute("content", `data:text/xml;base64,${btoa(content)}`);
}

window.prerenderReady = false;
Scrivito.load(sitemapXml)
  .then(writeXmlContentToExtract)
  .then(() => {
    window.prerenderReady = true;
  });
