import * as Scrivito from "scrivito";

Scrivito.configureObjClassForContentType({
  "image/*": "Image",
  "video/*": "Video",
  "*/*": "Download",
});
