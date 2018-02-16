import * as Scrivito from 'scrivito';
import { registerTextExtract } from '../../utils/textExtractRegistry';
import defaultPageAttributes from '../_defaultPageAttributes';
import metaDataAttributes from '../_metaDataAttributes';

const Homepage = Scrivito.provideObjClass('Homepage', {
  attributes: {
    ...defaultPageAttributes,
    showAsLandingPage: ['enum', { values: ['yes', 'no'] }],
    childOrder: 'referencelist',
    footer: ['widgetlist', { only: 'SectionWidget' }],
    logoDark: 'reference',
    logoWhite: 'reference',
    dividerLogo: 'reference',
    facebookAppId: 'string',
    twitterSite: 'string',
    googleMapsApiKey: 'string',
    googleAnalyticsTrackingId: 'string',
    ...metaDataAttributes,
  },
});

registerTextExtract('Homepage', [
  { attribute: 'navigationSection', type: 'widgetlist' },
  { attribute: 'body', type: 'widgetlist' },
]);

export default Homepage;
