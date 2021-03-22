import * as Scrivito from "scrivito";

export function configureObjClassForContentType() {
  Scrivito.configureObjClassForContentType({
    "image/*": "Image",
    "video/*": "Video",
    "*/*": "Download",
  });
}
