import { truncate } from "lodash-es";
import dataFromAuthor from "./dataFromAuthor";
import formatDate from "../../utils/formatDate";
import urlFromBinary from "../../utils/urlFromBinary";
import { textExtractFromObj } from "../../utils/textExtract";

function dataFromBlogPost(blogPost) {
  return {
    "@context": "http://schema.org",
    "@type": "BlogPosting",
    author: blogPost.get("author")
      ? dataFromAuthor(blogPost.get("author"))
      : undefined,
    datePublished: formatDate(blogPost.get("publishedAt"), "yyyy-mm-dd"),
    description: truncate(textExtractFromObj(blogPost), { length: 300 }),
    headline: blogPost.get("title"),
    image: urlFromBinary(blogPost.get("titleImage")),
    keywords: blogPost.get("tags").join(", "),
  };
}

export default dataFromBlogPost;
