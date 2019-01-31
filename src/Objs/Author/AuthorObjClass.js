import * as Scrivito from "scrivito";
import { registerTextExtract } from "../../utils/textExtractRegistry";
import metadataAttributes from "../_metadataAttributes";

const Author = Scrivito.provideObjClass("Author", {
  attributes: {
    title: "string",
    description: "string",
    image: ["reference", { only: ["Image"] }],
    ...metadataAttributes,
  },
});

registerTextExtract("Author", [{ attribute: "description", type: "string" }]);

export default Author;
