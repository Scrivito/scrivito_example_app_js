import * as Scrivito from "scrivito";

export const TickListWidget = Scrivito.provideWidgetClass("TickListWidget", {
  attributes: {
    items: ["widgetlist", { only: "TickListItemWidget" }],
  },
  extractTextAttributes: ["items"],
});
