import * as Scrivito from "scrivito";

export const Video = Scrivito.provideObjClass("Video", {
  attributes: {
    blob: "binary",
    tags: "stringlist",
  },
});
