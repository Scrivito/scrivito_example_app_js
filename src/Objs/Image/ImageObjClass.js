import * as Scrivito from "scrivito";

export const Image = Scrivito.provideObjClass("Image", {
  attributes: {
    blob: "binary",
    tags: "stringlist",
    alternativeText: "string",
  },
});
