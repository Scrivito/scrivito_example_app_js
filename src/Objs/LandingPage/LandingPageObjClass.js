import * as Scrivito from "scrivito";
import { registerTextExtract } from "../../utils/textExtractRegistry";
import metadataAttributes from "../_metadataAttributes";
import defaultPageAttributes from "../_defaultPageAttributes";

const LandingPage = Scrivito.provideObjClass("LandingPage", {
  attributes: {
    ...defaultPageAttributes,
    ...metadataAttributes,
  },
});

registerTextExtract("LandingPage", [
  { attribute: "navigationSection", type: "widgetlist" },
  { attribute: "body", type: "widgetlist" },
]);

export default LandingPage;
