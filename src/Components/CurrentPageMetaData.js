import * as React from 'react';
import * as Scrivito from 'scrivito';
import Helmet from 'react-helmet';
import getMetaData from '../utils/getMetaData';
import favicon from '../assets/images/favicon.png';

const CurrentPageMetaData = Scrivito.connect(() => {
  const htmlAttributes = { lang: 'en' };
  let title = '';
  let meta = [];

  const page = Scrivito.currentPage();
  if (page) {
    title = page.get('title') || '';
    meta = getMetaData(page);
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
  />;
});

export default CurrentPageMetaData;
