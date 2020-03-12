import * as Scrivito from "scrivito";

const TickListWidget = Scrivito.provideWidgetClass("TickListWidget", {
  attributes: {
    items: ["widgetlist", { only: "TickListItemWidget" }],
  },
  extractTextAttributes: ["items"],
});

export default TickListWidget;
