import * as Scrivito from 'scrivito';
import { registerTextExtract } from '../../utils/textExtractRegistry';
import metaDataAttributes from '../_metaDataAttributes';

const Blog = Scrivito.provideObjClass('Blog', {
  attributes: {
    title: 'string',
    navigationBackgroundImage: 'reference',
    body: ['widgetlist', { only: 'SectionWidget' }],
    ...metaDataAttributes,
  },
});

registerTextExtract('Blog', [
  { attribute: 'body', type: 'widgetlist' },
]);

export default Blog;
