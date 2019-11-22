import * as Scrivito from "scrivito";

const ColumnWidget = Scrivito.provideWidgetClass("ColumnWidget", {
  onlyInside: "ColumnContainerWidget",
  attributes: {
    colSize: "integer",
    content: "widgetlist",
  },
  extractTextAttributes: ["content"],
});

export default ColumnWidget;
