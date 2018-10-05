import * as Scrivito from "scrivito";

const Redirect = Scrivito.provideObjClass("Redirect", {
  attributes: {
    title: "string",
    link: "link",
    openInUi: ["enum", { values: ["yes", "no"] }],
  },
});

export default Redirect;
