import { urlFromBinaryObj } from "../../utils/urlFromBinary";

export function dataFromAuthor(author) {
  return {
    "@context": "http://schema.org",
    "@type": "Person",
    name: author.get("title"),
    description: author.get("description"),
    image: urlFromBinaryObj(author.get("image")),
  };
}
