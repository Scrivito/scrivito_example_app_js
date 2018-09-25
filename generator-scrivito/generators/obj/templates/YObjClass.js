import * as Scrivito from "scrivito";
import { registerTextExtract } from "../../utils/textExtractRegistry";

const <%= nameUpper %> = Scrivito.provideObjClass("<%= nameUpper %>", {
  attributes: {
    tags: "stringlist",
    title: "string",
  },
});

registerTextExtract("<%= nameUpper %>", [{ attribute: "text", type: "metadata" }]);

export default <%= nameUpper %>;