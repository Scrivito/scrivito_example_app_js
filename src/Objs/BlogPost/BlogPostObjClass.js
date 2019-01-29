import * as Scrivito from "scrivito";
import { registerTextExtract } from "../../utils/textExtractRegistry";
import metadataAttributes from "../_metadataAttributes";

const BlogPost = Scrivito.provideObjClass("BlogPost", {
  attributes: {
    author: ["reference", { only: "Author" }],
    body: ["widgetlist", { only: "SectionWidget" }],
    publishedAt: "date",
    subtitle: "string",
    tags: "stringlist",
    title: "string",
    titleImage: ["reference", { only: ["Image"] }],
    ...metadataAttributes,
  },
});

registerTextExtract("BlogPost", [{ attribute: "body", type: "widgetlist" }]);

export default BlogPost;
