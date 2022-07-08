import * as Scrivito from "scrivito";

export const Download = Scrivito.provideObjClass("Download", {
  attributes: {
    blob: "binary",
    tags: "stringlist",
    title: "string",
  },
  extractTextAttributes: ["blob:text"],
});
