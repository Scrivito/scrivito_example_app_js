import * as React from "react";
import * as Scrivito from "scrivito";
import formatDate from "../../utils/formatDate";

function BlogPostDate({ post }) {
  const date = post.get("publishedAt");

  if (!date) {
    return null;
  }

  return (
    <Scrivito.ContentTag
      content={post}
      attribute="publishedAt"
      tag="time"
      className="blog-timeline--badge"
      dateTime={date.toISOString()}
    >
      {formatDate(date, "mm/dd")}
    </Scrivito.ContentTag>
  );
}

export default Scrivito.connect(BlogPostDate);
