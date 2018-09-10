import * as React from "react";
import * as Scrivito from "scrivito";
import BlogPostDate from "./BlogPostDate";

const BlogPostNavigation = Scrivito.connect(({ currentPost }) => {
  if (!currentPost || !currentPost.get("publishedAt")) {
    return null;
  }

  return (
    <section className="bg-nav-content">
      <div className="container">
        <div className="nav-centered">
          <ul className="nav-blog">
            <li>
              <BlogPostNextLink currentBlogPost={currentPost} />
            </li>
            <li>
              <span>
                <BlogPostDate post={currentPost} />
              </span>
            </li>
            <li>
              <BlogPostPreviousLink currentBlogPost={currentPost} />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
});

const BlogPostNextLink = Scrivito.connect(({ currentBlogPost }) => {
  const currentDate = currentBlogPost.get("publishedAt");

  // find greater than publishedAt
  const newerPost = Scrivito.getClass("BlogPost")
    .where("publishedAt", "isGreaterThan", currentDate)
    .order("publishedAt", "asc")
    .first();

  if (!newerPost) {
    return null;
  }

  return (
    <Scrivito.LinkTag to={newerPost}>
      <i className="fa fa-chevron-circle-left  " aria-hidden="true" />
    </Scrivito.LinkTag>
  );
});

const BlogPostPreviousLink = Scrivito.connect(({ currentBlogPost }) => {
  const currentDate = currentBlogPost.get("publishedAt");

  // find less than or equal publishedAt
  const olderPost = Scrivito.getClass("BlogPost")
    .all()
    .andNot("id", "equals", currentBlogPost.id())
    .andNot("publishedAt", "isGreaterThan", currentDate)
    .order("publishedAt", "desc")
    .first();

  if (!olderPost) {
    return null;
  }

  return (
    <Scrivito.LinkTag to={olderPost}>
      <i className="fa fa-chevron-circle-right " aria-hidden="true" />
    </Scrivito.LinkTag>
  );
});

export default BlogPostNavigation;
