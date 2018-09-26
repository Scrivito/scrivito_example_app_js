import * as Scrivito from "scrivito";
import { registerTextExtract } from "../../utils/textExtractRegistry";

const <%= objClassName %> = Scrivito.provideObjClass("<%= objClassName %>", {
  attributes: {
    blob: "binary",
    tags: "stringlist",
    title: "string",
  },
});

registerTextExtract("<%= objClassName %>", [{ attribute: "text", type: "metadata" }]);

export default <%= objClassName %>;
