import * as Scrivito from "scrivito";
import { registerTextExtract } from "../../utils/textExtractRegistry";
import metadataAttributes from "../_metadataAttributes";

const Blog = Scrivito.provideObjClass("Blog", {
  attributes: {
    title: "string",
    navigationBackgroundImage: ["reference", { only: ["Image"] }],
    body: ["widgetlist", { only: "SectionWidget" }],
    ...metadataAttributes,
  },
});

registerTextExtract("Blog", [{ attribute: "body", type: "widgetlist" }]);

export default Blog;
