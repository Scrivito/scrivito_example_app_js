import { urlFromBinary } from "../../utils/urlFromBinary";

export function dataFromAuthor(author) {
  return {
    "@context": "http://schema.org",
    "@type": "Person",
    name: author.get("title"),
    description: author.get("description"),
    image: urlFromBinary(author.get("image")),
  };
}
