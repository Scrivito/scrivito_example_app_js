import urlFromBinary from "../../utils/urlFromBinary";
import isVideoObj from "../../utils/isVideoObj";

function dataFromBlog(blog) {
  const schema = {
    "@context": "http://schema.org ",
    "@type": "Blog",
    headline: blog.get("title"),
  };

  const backgroundObj = blog.get("navigationBackgroundImage");
  if (backgroundObj && !isVideoObj(backgroundObj)) {
    schema.image = urlFromBinary(backgroundObj);
  }

  return schema;
}

export default dataFromBlog;
