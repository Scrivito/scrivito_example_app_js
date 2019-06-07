import * as Scrivito from "scrivito";

const RedirectToUi = Scrivito.provideObjClass("RedirectToUi", {
  attributes: {
    title: "string",
    reference: "reference",
  },
});

export default RedirectToUi;
