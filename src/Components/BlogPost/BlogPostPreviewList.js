import * as React from "react";
import * as Scrivito from "scrivito";
import { truncate } from "lodash-es";
import InPlaceEditingPlaceholder from "../InPlaceEditingPlaceholder";
import isImage from "../../utils/isImage";
import { textExtractFromObj } from "../../utils/textExtract";

const BlogPostPreviewList = Scrivito.connect(
  ({ maxItems, author, tag, filterBlogPostId, moreFlag }) => {
    let blogPosts = Scrivito.getClass("BlogPost")
      .all()
      .order("publishedAt", "desc");
    if (author) {
      blogPosts = blogPosts.and("author", "refersTo", author);
    }
    if (tag) {
      blogPosts = blogPosts.and("tags", "equals", tag);
    }
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

    const firstPost = posts[0];

    if (!moreFlag) {
      posts.splice(0, 1);
    }

    return (
      <React.Fragment>
        {!moreFlag && (
          <div className="col-lg-12 col-sm-12 timeline-first-post">
            {/* <BlogPostDate post={post} /> */}
            <div className="timeline-panel">
              <div className="timeline-body">
                <BlogPostTitleImage post={firstPost} />
                <div className="timeline-content">
                  <h6>
                    {firstPost.get("tags").map(text => {
                      // eslint-disable-next-line react/jsx-key
                      return <span>{text}&nbsp;&nbsp;</span>;
                    })}
                  </h6>
                  <h3>
                    <Scrivito.LinkTag to={firstPost}>
                      {firstPost.get("title")}
                    </Scrivito.LinkTag>
                  </h3>
                  <p>
                    {truncate(textExtractFromObj(firstPost), {
                      length: 100,
                      separator: /,? +/,
                    })}
                  </p>
                </div>
              </div>
              {/* <div className="timeline-footer">
              <Scrivito.LinkTag to={post} className="btn btn-clear">
                Read more
                <i className="fa fa-angle-right fa-4" aria-hidden="true" />
              </Scrivito.LinkTag>
            </div> */}
            </div>
          </div>
        )}
        <PostsTimeline posts={posts} />
      </React.Fragment>
    );
  }
);

const PostsTimeline = Scrivito.connect(({ posts }) => (
  <div className="row align-items-start">
    {posts.map(post => (
      <BlogPostPreview key={post.id()} post={post} />
    ))}
  </div>
));

const BlogPostPreview = Scrivito.connect(({ post }) => {
  return (
    <div className="col-lg-4 col-sm-12">
      {/* <BlogPostDate post={post} /> */}
      <div className="timeline-panel">
        <div className="timeline-body">
          <BlogPostTitleImage post={post} />
          <div className="timeline-content">
            <h6>
              {post.get("tags").map(text => {
                // eslint-disable-next-line react/jsx-key
                return <span>{text}&nbsp;&nbsp;</span>;
              })}
            </h6>
            <h3>
              <Scrivito.LinkTag to={post}>{post.get("title")}</Scrivito.LinkTag>
            </h3>
            <p>
              {truncate(textExtractFromObj(post), {
                length: 100,
                separator: /,? +/,
              })}
            </p>
          </div>
        </div>
        {/* <div className="timeline-footer">
          <Scrivito.LinkTag to={post} className="btn btn-clear">
            Read more
            <i className="fa fa-angle-right fa-4" aria-hidden="true" />
          </Scrivito.LinkTag>
        </div> */}
      </div>
    </div>
  );
});

const BlogPostTitleImage = Scrivito.connect(({ post }) => {
  const titleImage = post.get("titleImage");
  if (!isImage(titleImage)) {
    return null;
  }

  return (
    <Scrivito.LinkTag to={post}>
      <Scrivito.ImageTag
        content={titleImage}
        className="img-responsive"
        alt={titleImage.get("alternativeText") ? titleImage.get("alternativeText") : "alt-image"}
      />
    </Scrivito.LinkTag>
  );
});

export default BlogPostPreviewList;
