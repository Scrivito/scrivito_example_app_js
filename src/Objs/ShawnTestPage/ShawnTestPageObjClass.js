import * as Scrivito from "scrivito";
import metadataAttributes from "../_metadataAttributes";

const ShawnTestPage = Scrivito.provideObjClass("ShawnTestPage", {
  attributes: {
    title: "string",
    body: ["widgetlist", { only: "SectionWidget" }],
    ...metadataAttributes,
  },
  extractTextAttributes: ["body"],
});

export default ShawnTestPage;
