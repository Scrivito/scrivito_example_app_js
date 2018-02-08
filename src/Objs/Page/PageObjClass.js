import * as Scrivito from 'scrivito';
import { registerTextExtract } from '../../utils/textExtractRegistry';
import metaDataAttributes from '../_metaDataAttributes';
import defaultPageAttributes from '../_defaultPageAttributes';

const Page = Scrivito.provideObjClass('Page', {
  attributes: {
    ...defaultPageAttributes,
    childOrder: 'referencelist',
    ...metaDataAttributes,
  },
});

registerTextExtract('Page', [
  { attribute: 'navigationSection', type: 'widgetlist' },
  { attribute: 'body', type: 'widgetlist' },
]);

export default Page;
