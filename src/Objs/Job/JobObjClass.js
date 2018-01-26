import { registerTextExtract } from 'utils/textExtractRegistry';
import metaDataAttributes from '../_metaDataAttributes';

const Job = Scrivito.provideObjClass('Job', {
  attributes: {
    body: ['widgetlist', { only: 'SectionWidget' }],
    image: 'reference',
    location: 'string',
    title: 'string',
    ...metaDataAttributes,
  },
});

registerTextExtract('Job', [
  { attribute: 'location', type: 'string' },
  { attribute: 'body', type: 'widgetlist' },
]);

export default Job;
