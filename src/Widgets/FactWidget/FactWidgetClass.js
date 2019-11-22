import * as Scrivito from "scrivito";

const FactWidget = Scrivito.provideWidgetClass("FactWidget", {
  attributes: {
    key: "string",
    value: "string",
  },
  extractTextAttributes: ["key", "value"],
});

export default FactWidget;
