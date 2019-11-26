import * as Scrivito from "scrivito";
import metadataAttributes from "../_metadataAttributes";
import defaultPageAttributes from "../_defaultPageAttributes";

const Page = Scrivito.provideObjClass("Page", {
  attributes: {
    ...defaultPageAttributes,
    childOrder: "referencelist",
    ...metadataAttributes,
  },
  extractTextAttributes: ["navigationSection", "body"],
});

export default Page;
