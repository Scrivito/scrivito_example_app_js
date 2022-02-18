import * as Scrivito from "scrivito";

const BoxWidget = Scrivito.provideWidgetClass("BoxWidget", {
  attributes: {
    body: "widgetlist",
    boxStyle: ["enum", { values: ["transparent", "white"] }],
    useOffset: "boolean",
  },
  extractTextAttributes: ["body"],
});

export default BoxWidget;
