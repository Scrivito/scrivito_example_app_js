import * as Scrivito from "scrivito";

Scrivito.configureObjClassForContentType({
  "image/*": "Image", // Factory default
  "video/*": "Video",
  "*/*": "Download", // Factory default
});
