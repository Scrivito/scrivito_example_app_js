import * as Scrivito from "scrivito";
import { registerTextExtract } from "../../utils/textExtractRegistry";
import metaDataAttributes from "../_metaDataAttributes";

const <%= nameUpper %> = Scrivito.provideObjClass("<%= nameUpper %>", {
  attributes: {
    title: "string",
    body: ["widgetlist", { only: "SectionWidget" }],
    ...metaDataAttributes,
  },
});

registerTextExtract("<%= nameUpper %>", [{ attribute: "body", type: "widgetlist" }]);

export default <%= nameUpper %>;
