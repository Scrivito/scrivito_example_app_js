import * as React from "react";
import * as Scrivito from "scrivito";
import { groupBy, truncate } from "lodash-es";
import { BlogPostDate } from "./BlogPostDate";
import { formatDate } from "../../utils/formatDate";
import { InPlaceEditingPlaceholder } from "../InPlaceEditingPlaceholder";
import { isImageObj } from "../../utils/isImageObj";

export const BlogPostPreviewList = Scrivito.connect(
  ({ maxItems, author, tag, filterBlogPostId }) => {
    let blogPosts = Scrivito.getClass("BlogPost")
      .all()
      .order([
        ["publishedAt", "desc"],
        ["_id", "desc"],
      ]);
    if (author) blogPosts = blogPosts.and("author", "refersTo", author);
    if (tag) blogPosts = blogPosts.and("tags", "equals", tag);
    if (filterBlogPostId) {
      blogPosts = blogPosts.andNot("id", "equals", filterBlogPostId);
    }

    let posts;
    if (maxItems) {
      posts = blogPosts.take(maxItems);
    } else {
      posts = [...blogPosts];
    }

    if (!posts.length) {
      return (
        <InPlaceEditingPlaceholder center>
          There are no blog posts. Create one using the page menu.
        </InPlaceEditingPlaceholder>
      );
    }

    const months = groupBy(posts, (post) => {
      const publishedAt = post.get("publishedAt");
      return publishedAt && formatDate(publishedAt, "mmmm yyyy");
    });

    return (
      <React.Fragment>
        {Object.entries(months).map(([month, monthPosts]) => (
          <React.Fragment key={`month: ${month}`}>
            <MonthHeadline date={monthPosts[0].get("publishedAt")} />
            <PostsTimeline posts={monthPosts} />
          </React.Fragment>
        ))}
      </React.Fragment>
    );
  }
);

const MonthHeadline = Scrivito.connect(({ date }) => {
  if (!date) return null;

  return (
    <div className="blog-timeline--divider">
      <time dateTime={formatDate(date, "yyyy-mm")}>
        {formatDate(date, "mmmm yyyy")}
      </time>
    </div>
  );
});

const PostsTimeline = Scrivito.connect(({ posts }) => (
  <ul className="blog-timeline">
    {posts.map((post) => (
      <BlogPostPreview key={post.id()} post={post} />
    ))}
  </ul>
));

const BlogPostPreview = Scrivito.connect(({ post }) => (
  <li>
    <BlogPostDate post={post} />
    <div className="blog-timeline--panel">
      <div className="blog-timeline--body">
        <BlogPostTitleImage post={post} />
        <h3>
          <Scrivito.LinkTag to={post}>{post.get("title")}</Scrivito.LinkTag>
        </h3>
        <h4>{post.get("subtitle")}</h4>
        <p>
          {truncate(Scrivito.extractText(post, { length: 330 }), {
            length: 300,
            separator: /,? +/,
          })}
        </p>
      </div>
      <div className="blog-timeline--footer">
        <Scrivito.LinkTag to={post} className="btn btn-clear">
          Read more
          <i className="fa fa-angle-right fa-4" aria-hidden="true" />
        </Scrivito.LinkTag>
      </div>
    </div>
  </li>
));

const BlogPostTitleImage = Scrivito.connect(({ post }) => {
  const titleImage = post.get("titleImage");
  if (!isImageObj(titleImage)) return null;

  return (
    <Scrivito.LinkTag to={post}>
      <Scrivito.ImageTag
        content={titleImage}
        className="img-responsive"
        alt={titleImage.get("alternativeText")}
      />
    </Scrivito.LinkTag>
  );
});
