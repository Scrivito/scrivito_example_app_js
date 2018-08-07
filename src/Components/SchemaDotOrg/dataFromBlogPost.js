import { truncate } from "lodash-es";
import dataFromAuthor from "./dataFromAuthor";
import formatDate from "../../utils/formatDate";
import urlFromBinary from "../../utils/urlFromBinary";
import { textExtractFromWidgetlist } from "../../utils/textExtract";

function dataFromBlogPost(blogPost) {
  let author;
  const body = textExtractFromWidgetlist(blogPost.get("body"));

  if (blogPost.get("author")) {
    author = dataFromAuthor(blogPost.get("author"));
  }

  return {
    "@context": "http://schema.org",
    "@type": "BlogPosting",
    author,
    datePublished: formatDate(blogPost.get("publishedAt"), "yyyy-mm-dd"),
    description: truncate(body, { length: 300 }),
    headline: blogPost.get("title"),
    image: urlFromBinary(blogPost.get("titleImage")),
    keywords: blogPost.get("tags").join(", "),
  };
}

export default dataFromBlogPost;
