import * as Scrivito from "scrivito";

const TickListItemWidget = Scrivito.provideWidgetClass("TickListItemWidget", {
  onlyInside: "TickListWidget",
  attributes: {
    statement: "string",
  },
  extractTextAttributes: ["statement"],
});

export default TickListItemWidget;
