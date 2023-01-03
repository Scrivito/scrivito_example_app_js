import { urlFromBinaryObj } from "../../utils/urlFromBinary";
import { isImageObj } from "../../utils/isImageObj";

export function dataFromBlog(blog) {
  const schema = {
    "@context": "http://schema.org",
    "@type": "Blog",
    headline: blog.get("title"),
  };

  const backgroundObj = blog.get("navigationBackgroundImage");
  if (isImageObj(backgroundObj)) schema.image = urlFromBinaryObj(backgroundObj);

  return schema;
}
