import * as Scrivito from "scrivito";
import { truncate } from "lodash-es";
import dataFromAuthor from "./dataFromAuthor";
import formatDate from "../../utils/formatDate";
import urlFromBinary from "../../utils/urlFromBinary";

function dataFromBlogPost(blogPost) {
  const description = Scrivito.extractText(blogPost, { length: 330 });
  return {
    "@context": "http://schema.org",
    "@type": "BlogPosting",
    author: blogPost.get("author")
      ? dataFromAuthor(blogPost.get("author"))
      : undefined,
    datePublished: formatDate(blogPost.get("publishedAt"), "yyyy-mm-dd"),
    description: truncate(description, { length: 300 }),
    headline: blogPost.get("title"),
    image: urlFromBinary(blogPost.get("titleImage")),
    keywords: blogPost.get("tags").join(", "),
  };
}

export default dataFromBlogPost;
