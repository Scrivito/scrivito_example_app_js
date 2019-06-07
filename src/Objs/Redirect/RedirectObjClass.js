import * as Scrivito from "scrivito";

const Redirect = Scrivito.provideObjClass("Redirect", {
  attributes: {
    title: "string",
    link: "link",
  },
});

export default Redirect;
