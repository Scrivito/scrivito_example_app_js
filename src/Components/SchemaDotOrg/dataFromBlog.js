import urlFromBinary from "../../utils/urlFromBinary";

function dataFromBlog(blog) {
  return {
    "@context": "http://schema.org",
    "@type": "Blog",
    headline: blog.get("title"),
    image: urlFromBinary(blog.get("navigationBackground")),
  };
}

export default dataFromBlog;
