/* eslint no-console: "off" */
import * as Scrivito from "scrivito";
import xml from "xml";
import formatDate from "../utils/formatDate";

export default async function prerenderSitemap(objClassesWhitelist) {
  console.time("[prerenderSitemap]");
  const fileContent = await Scrivito.load(() =>
    sitemapXml(objClassesWhitelist)
  );
  console.timeEnd("[prerenderSitemap]");
  return [{ filename: "/sitemap.xml", fileContent }];
}

function sitemapXml(objClassesWhitelist) {
  const pages = [
    ...Scrivito.Obj.where("_objClass", "equals", objClassesWhitelist).andNot(
      "robotsIndex",
      "equals",
      "no"
    ),
  ];
  const sitemapUrls = pages.map(pageToSitemapUrl);

  return xml(
    {
      urlset: [
        { _attr: { xmlns: "http://www.sitemaps.org/schemas/sitemap/0.9" } },
        ...sitemapUrls,
      ],
    },
    { declaration: true }
  );
}

function pageToSitemapUrl(page) {
  return {
    url: [
      { loc: Scrivito.urlFor(page) },
      { lastmod: formatDate(page.lastChanged(), "yyyy-mm-dd") },
    ],
  };
}
