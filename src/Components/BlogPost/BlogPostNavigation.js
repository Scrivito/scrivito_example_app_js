import * as React from "react";
import * as Scrivito from "scrivito";
import { BlogPostDate } from "./BlogPostDate";

export const BlogPostNavigation = Scrivito.connect(({ currentPost }) => {
  if (!currentPost || !currentPost.get("publishedAt")) return null;

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

  const sameDateNextBlogPost = Scrivito.getClass("BlogPost")
    .where("publishedAt", "equals", currentDate)
    .and("_id", "isGreaterThan", currentBlogPost.id())
    .order("_id", "asc")
    .first();

  const newerPost =
    sameDateNextBlogPost ||
    Scrivito.getClass("BlogPost")
      .where("publishedAt", "isGreaterThan", currentDate)
      .order([
        ["publishedAt", "asc"],
        ["_id", "asc"],
      ])
      .first();

  if (!newerPost) return null;

  return (
    <Scrivito.LinkTag to={newerPost}>
      <i className="fa fa-chevron-circle-left  " aria-hidden="true" />
    </Scrivito.LinkTag>
  );
});

const BlogPostPreviousLink = Scrivito.connect(({ currentBlogPost }) => {
  const currentDate = currentBlogPost.get("publishedAt");

  const sameDatePreviousBlogPost = Scrivito.getClass("BlogPost")
    .where("publishedAt", "equals", currentDate)
    .and("_id", "isLessThan", currentBlogPost.id())
    .order("_id", "desc")
    .first();

  const olderPost =
    sameDatePreviousBlogPost ||
    Scrivito.getClass("BlogPost")
      .where("publishedAt", "isLessThan", currentDate)
      .order([
        ["publishedAt", "desc"],
        ["_id", "desc"],
      ])
      .first();

  if (!olderPost) return null;

  return (
    <Scrivito.LinkTag to={olderPost}>
      <i className="fa fa-chevron-circle-right " aria-hidden="true" />
    </Scrivito.LinkTag>
  );
});
