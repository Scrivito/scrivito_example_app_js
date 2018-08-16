import * as React from "react";
import * as Scrivito from "scrivito";
import BlogPostPreviewList from "./BlogPostPreviewList";

function BlogPostMorePosts({ author, filterBlogPostId }) {
  if (!author) {
    return null;
  }
  if (author.objClass() !== "Author") {
    return null;
  }

  return (
    <section className="bg-white">
      <div className="container gutter0">
        <h1 className="h2 b-bottom text-center">
          More great blog posts from {author.get("title")}
        </h1>
        <BlogPostPreviewList
          author={author}
          filterBlogPostId={filterBlogPostId}
        />
      </div>
    </section>
  );
}

export default Scrivito.connect(BlogPostMorePosts);
