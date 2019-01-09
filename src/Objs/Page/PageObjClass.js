import * as Scrivito from "scrivito";
import { registerTextExtract } from "../../utils/textExtractRegistry";
import metadataAttributes from "../_metadataAttributes";
import defaultPageAttributes from "../_defaultPageAttributes";

const Page = Scrivito.provideObjClass("Page", {
  attributes: {
    ...defaultPageAttributes,
    childOrder: "referencelist",
    ...metadataAttributes,
  },
});

registerTextExtract("Page", [
  { attribute: "navigationSection", type: "widgetlist" },
  { attribute: "body", type: "widgetlist" },
]);

export default Page;
