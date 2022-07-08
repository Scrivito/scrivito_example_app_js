import * as Scrivito from "scrivito";

export const ColumnWidget = Scrivito.provideWidgetClass("ColumnWidget", {
  onlyInside: "ColumnContainerWidget",
  attributes: {
    colSize: "integer",
    content: "widgetlist",
  },
  extractTextAttributes: ["content"],
});
