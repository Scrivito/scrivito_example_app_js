import * as Scrivito from "scrivito";

const BoxWidget = Scrivito.provideWidgetClass("BoxWidget", {
  attributes: {
    body: "widgetlist",
    boxStyle: ["enum", { values: ["transparent", "white"] }],
    useOffset: ["enum", { values: ["yes", "no"] }],
  },
  extractTextAttributes: ["body"],
});

export default BoxWidget;
