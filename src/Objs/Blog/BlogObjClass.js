import * as Scrivito from "scrivito";
import { metadataAttributes } from "../_metadataAttributes";

export const Blog = Scrivito.provideObjClass("Blog", {
  attributes: {
    title: "string",
    navigationBackgroundImage: ["reference", { only: ["Image"] }],
    body: ["widgetlist", { only: "SectionWidget" }],
    ...metadataAttributes,
  },
  extractTextAttributes: ["body"],
});
