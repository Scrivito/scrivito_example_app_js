import * as React from "react";
import * as Scrivito from "scrivito";
import BlogPostPreviewList from "../../Components/BlogPost/BlogPostPreviewList";

Scrivito.provideComponent("BlogOverviewWidget", ({ widget }) => {
  let tag = Scrivito.currentPageParams().tag;

  const tags = widget.get("tags");
  if (!tag && tags.length) {
    tag = tags;
  }

  return (
    <BlogPostPreviewList
      maxItems={widget.get("maxItems")}
      author={widget.get("author")}
      tag={tag}
    />
  );
});
