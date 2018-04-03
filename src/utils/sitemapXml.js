import * as Scrivito from 'scrivito';
import xml from 'xml';
import formatDate from './formatDate';

const OBJ_CLASSES_TO_INDEX = [
  'Author',
  'Blog',
  'BlogPost',
  'Event',
  'Homepage',
  'Job',
  'LandingPage',
  'Page',
];

function sitemapXml() {
  const pages = [...Scrivito.Obj.where('_objClass', 'equals', OBJ_CLASSES_TO_INDEX)
    .andNot('robotsIndex', 'equals', 'no')];
  const urls = pages.map(pageToUrl);

  return xml(
    {
      urlset: [
        { _attr: { xmlns: 'http://www.sitemaps.org/schemas/sitemap/0.9' } },
        ...urls,
      ],
    },
    { declaration: true }
  );
}

function pageToUrl(page) {
  return {
    url: [
      { loc: Scrivito.urlFor(page) },
      { lastmod: formatDate(page.lastChanged(), 'yyyy-mm-dd') },
    ],
  };
}

export default sitemapXml;
