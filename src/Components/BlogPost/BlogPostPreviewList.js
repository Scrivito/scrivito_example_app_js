import * as React from 'react';
import * as Scrivito from 'scrivito';
import truncate from 'lodash/truncate';
import BlogPostDate from './BlogPostDate';
import formatDate from '../../utils/formatDate';
import InPlaceEditingPlaceholder from '../InPlaceEditingPlaceholder';
import isImage from '../../utils/isImage';
import { textExtractFromObj } from '../../utils/textExtract';

const BlogPostPreviewList = Scrivito.connect(({ maxItems, author, tag }) => {
  let blogPosts = Scrivito.getClass('BlogPost').all().order('publishedAt', 'desc');
  if (author) {
    blogPosts = blogPosts.and('author', 'refersTo', author);
  }
  if (tag) {
    blogPosts = blogPosts.and('tags', 'equals', tag);
  }

  let posts;
  if (maxItems) {
    posts = blogPosts.take(maxItems);
  } else {
    posts = [...blogPosts];
  }

  if (!posts.length) {
    return (
      <InPlaceEditingPlaceholder center={ true }>
        There are no blog posts. Create one using the page menu.
      </InPlaceEditingPlaceholder>
    );
  }

  let dateHeadline = null;
  const listElements = [];
  posts.forEach(post => {
    const publishedAt = post.get('publishedAt');
    if (publishedAt && dateHeadline !== formatDate(publishedAt, 'mmmm yyyy')) {
      dateHeadline = formatDate(publishedAt, 'mmmm yyyy');
      listElements.push(<MonthHeadline date={ publishedAt } key={ publishedAt }/>);
    }

    listElements.push(<BlogPostPreview key={ post.id() } post={ post } />);
  });

  return (
    <ul className="timeline">
      { listElements }
    </ul>
  );
});

const MonthHeadline = Scrivito.connect(({ date }) =>
  <li className="timeline-divider">
    <time dateTime={ formatDate(date, 'yyyy-mm') }>
      { formatDate(date, 'mmmm yyyy') }
    </time>
  </li>
);

const BlogPostPreview = Scrivito.connect(({ post }) => {
  return (
    <li>
      <BlogPostDate post={ post } />
      <div className="timeline-panel">
        <div className="timeline-body">
          <BlogPostTitleImage post={ post } />
          <h3>
            <Scrivito.LinkTag to={ post }>
              { post.get('title') }
            </Scrivito.LinkTag>
          </h3>
          <h4>{ post.get('subtitle') }</h4>
          <p>{ truncate(textExtractFromObj(post), { length: 300, separator: /,? +/ }) }</p>
        </div>
        <div className="timeline-footer">
          <Scrivito.LinkTag to={ post } className="btn btn-clear">
            Read more<i className="fa fa-angle-right fa-4" aria-hidden="true" />
          </Scrivito.LinkTag>
        </div>
      </div>
    </li>
  );
});

const BlogPostTitleImage = Scrivito.connect(({ post }) => {
  const titleImage = post.get('titleImage');
  if (!isImage(titleImage)) { return null; }

  return (
    <Scrivito.LinkTag to={ post }>
      <Scrivito.ImageTag
        content={ titleImage }
        className="img-responsive"
        alt={ titleImage.get('alternativeText') }
      />
    </Scrivito.LinkTag>
  );
});

export default BlogPostPreviewList;
