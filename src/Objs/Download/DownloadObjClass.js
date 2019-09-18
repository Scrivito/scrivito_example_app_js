import * as Scrivito from "scrivito";

const Download = Scrivito.provideObjClass("Download", {
  attributes: {
    blob: "binary",
    tags: "stringlist",
    title: "string",
  },
  extractTextAttributes: ["blob:text"],
});

export default Download;
