import * as Scrivito from "scrivito";
import metadataAttributes from "../_metadataAttributes";

const BlogPost = Scrivito.provideObjClass("BlogPost", {
  attributes: {
    author: ["reference", { only: "Author" }],
    body: ["widgetlist", { only: "SectionWidget" }],
    publishedAt: "datetime",
    subtitle: "string",
    tags: "stringlist",
    title: "string",
    titleImage: ["reference", { only: ["Image"] }],
    ...metadataAttributes,
  },
  extractTextAttributes: ["body"],
});

export default BlogPost;
