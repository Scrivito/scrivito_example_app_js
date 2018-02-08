import * as Scrivito from 'scrivito';
import { registerTextExtract } from '../../utils/textExtractRegistry';
import metaDataAttributes from '../_metaDataAttributes';
import defaultPageAttributes from '../_defaultPageAttributes';

const LandingPage = Scrivito.provideObjClass('LandingPage', {
  attributes: {
    ...defaultPageAttributes,
    ...metaDataAttributes,
  },
});

registerTextExtract('LandingPage', [
  { attribute: 'navigationSection', type: 'widgetlist' },
  { attribute: 'body', type: 'widgetlist' },
]);

export default LandingPage;
