import * as Scrivito from 'scrivito';
import './Objs';
import './config';
import sitemapXml from './utils/sitemapXml';
import writeXmlContentToExtract from './utils/writeXmlContentToExtract';

function generate() {
  window.prerenderReady = false;
  Scrivito.load(sitemapXml)
    .then(writeXmlContentToExtract)
    .then(() => {
      window.prerenderReady = true;
    });
}

generate();
