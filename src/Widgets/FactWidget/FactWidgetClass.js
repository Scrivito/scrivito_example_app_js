import * as Scrivito from "scrivito";

export const FactWidget = Scrivito.provideWidgetClass("FactWidget", {
  attributes: {
    key: "string",
    value: "string",
  },
  extractTextAttributes: ["key", "value"],
});
