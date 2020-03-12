import * as Scrivito from "scrivito";
import metadataAttributes from "../_metadataAttributes";

const Author = Scrivito.provideObjClass("Author", {
  attributes: {
    title: "string",
    description: "string",
    image: ["reference", { only: ["Image"] }],
    ...metadataAttributes,
  },
  extractTextAttributes: ["description"],
});

export default Author;
