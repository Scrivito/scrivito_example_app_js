import truncate from 'lodash/truncate';
import formatDate from '../../utils/formatDate';
import urlFromBinary from '../../utils/urlFromBinary';
import { textExtractFromWidgetlist } from '../../utils/textExtract';

function dataFromBlogPost(blogPost) {
  const body = textExtractFromWidgetlist(blogPost.get('body'));

  return {
    '@context': 'http://schema.org',
    '@type': 'BlogPosting',
    author: personFromBlogPost(blogPost.get('author')),
    datePublished: formatDate(blogPost.get('publishedAt'), 'yyyy-mm-dd'),
    description: truncate(body, { length: 300 }),
    headline: blogPost.get('title'),
    image: urlFromBinary(blogPost.get('titleImage')),
    keywords: blogPost.get('tags').join(', '),
  };
}

function personFromBlogPost(author) {
  if (!author) {
    return;
  }

  return {
    '@type': 'Person',
    name: author.get('title'),
  };
}

export default dataFromBlogPost;
