import * as Scrivito from "scrivito";

const Image = Scrivito.provideObjClass("Image", {
  attributes: {
    blob: "binary",
    tags: "stringlist",
    alternativeText: "string",
  },
});

export default Image;
