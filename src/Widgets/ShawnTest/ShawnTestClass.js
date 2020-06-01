import * as Scrivito from "scrivito";

const ShawnTest = Scrivito.provideWidgetClass("ShawnTest", {
  attributes: {
    headline: "string",
    body: "html"
  },
  extractTextAttributes: ["headline", "body"],
});

export default ShawnTest;
