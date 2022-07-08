import * as Scrivito from "scrivito";

export const TickListItemWidget = Scrivito.provideWidgetClass(
  "TickListItemWidget",
  {
    onlyInside: "TickListWidget",
    attributes: {
      statement: "string",
    },
    extractTextAttributes: ["statement"],
  }
);
