import urlFromBinary from "../../utils/urlFromBinary";
import isVideoObj from "../../utils/isVideoObj";

function dataFromBlog(blog) {
  if (!isVideoObj("navigationBackgroundImage")) {
    return {
      "@context": "http://schema.org",
      "@type": "Blog",
      headline: blog.get("title"),
      image: urlFromBinary(blog.get("navigationBackgroundImage")),
    };
  }
}

export default dataFromBlog;
