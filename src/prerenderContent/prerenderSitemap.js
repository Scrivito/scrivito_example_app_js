/* eslint no-console: "off" */
import * as Scrivito from "scrivito";
import xml from "xml";
import formatDate from "../utils/formatDate";

export default async function prerenderSitemap(
  objClassesWhitelist,
  storeResult
) {
  console.time("[prerenderSitemap]");
  const { content, itemsCount } = await Scrivito.load(() =>
    sitemapXml(objClassesWhitelist)
  );
  console.log(
    `[prerenderSitemap] Generated sitemap.xml with ${itemsCount} items.`
  );
  console.timeEnd("[prerenderSitemap]");
  await storeResult({ filename: "/sitemap.xml", content });
}

function sitemapXml(objClassesWhitelist) {
  const pages = Scrivito.Obj.where("_objClass", "equals", objClassesWhitelist)
    .andNot("robotsIndex", "equals", "no")
    .take();
  const sitemapUrls = pages.map(pageToSitemapUrl);

  const content = xml(
    {
      urlset: [
        { _attr: { xmlns: "http://www.sitemaps.org/schemas/sitemap/0.9" } },
        ...sitemapUrls,
      ],
    },
    { declaration: true }
  );

  const itemsCount = sitemapUrls.length;
  return { content, itemsCount };
}

function pageToSitemapUrl(page) {
  return {
    url: [
      { loc: Scrivito.urlFor(page) },
      { lastmod: formatDate(page.lastChanged(), "yyyy-mm-dd") },
    ],
  };
}
