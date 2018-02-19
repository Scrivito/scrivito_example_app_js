import * as React from 'react';
import * as Scrivito from 'scrivito';
import Helmet from 'react-helmet';
import getMetaData from '../utils/getMetaData';
import favicon from '../assets/images/favicon.png';

const CurrentPageMetaData = Scrivito.connect(() => {
  const htmlAttributes = { lang: 'en' };
  let title = '';
  let meta = [];
  let canonical;

  const page = Scrivito.currentPage();
  if (page) {
    title = page.get('title') || '';
    meta = getMetaData(page);
    canonical = <link rel='canonical' href={ Scrivito.urlFor(page) } />;
  }

  const links = [
    {
      rel: 'shortcut icon',
      type: 'image/png',
      href: favicon,
    },
  ];

  return <Helmet
    meta={ meta }
    htmlAttributes={ htmlAttributes }
    title={ title }
    link={ links }
  >
    { canonical }
  </Helmet>;
});

export default CurrentPageMetaData;
