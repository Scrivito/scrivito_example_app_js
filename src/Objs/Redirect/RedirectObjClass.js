import * as Scrivito from "scrivito";

export const Redirect = Scrivito.provideObjClass("Redirect", {
  attributes: {
    title: "string",
    link: "link",
  },
});
