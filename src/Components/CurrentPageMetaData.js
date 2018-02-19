import * as React from 'react';
import * as Scrivito from 'scrivito';
import Helmet from 'react-helmet';
import getMetaData from '../utils/getMetaData';
import favicon from '../assets/images/favicon.png';

const CurrentPageMetaData = Scrivito.connect(() => {
  const htmlAttributes = { lang: 'en' };
  let title = '';
  let meta = [];
  const links = [
    {
      rel: 'shortcut icon',
      type: 'image/png',
      href: favicon,
    },
  ];

  const page = Scrivito.currentPage();
  if (page) {
    title = page.get('title') || '';
    meta = getMetaData(page);
    links.push({ rel: 'canonical', href: Scrivito.urlFor(page) });
  }

  return <Helmet
    meta={ meta }
    htmlAttributes={ htmlAttributes }
    title={ title }
    link={ links }
  />;
});

export default CurrentPageMetaData;
