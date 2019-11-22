import * as Scrivito from "scrivito";
import { registerTextExtract } from "../../utils/textExtractRegistry";

const Download = Scrivito.provideObjClass("Download", {
  attributes: {
    blob: "binary",
    tags: "stringlist",
    title: "string",
  },
  extractTextAttributes: ["blob:text"],
});

registerTextExtract("Download", [{ attribute: "text", type: "metadata" }]);

export default Download;
