import * as Scrivito from 'scrivito';
import { registerTextExtract } from '../../utils/textExtractRegistry';
import metaDataAttributes from '../_metaDataAttributes';

const BlogPost = Scrivito.provideObjClass('BlogPost', {
  attributes: {
    author: 'reference',
    body: ['widgetlist', { only: 'SectionWidget' }],
    publishedAt: 'date',
    subtitle: 'string',
    tags: 'stringlist',
    title: 'string',
    titleImage: 'reference',
    ...metaDataAttributes,
  },
});

registerTextExtract('BlogPost', [
  { attribute: 'body', type: 'widgetlist' },
]);

export default BlogPost;
