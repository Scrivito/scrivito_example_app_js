import * as Scrivito from "scrivito";

export const TableRowWidget = Scrivito.provideWidgetClass("TableRowWidget", {
  attributes: {
    cell1: "string",
    cell2: [
      "widgetlist",
      { only: ["IconWidget", "TextWidget", "PriceWidget"] },
    ],
    cell3: [
      "widgetlist",
      { only: ["IconWidget", "TextWidget", "PriceWidget"] },
    ],
    cell4: [
      "widgetlist",
      { only: ["IconWidget", "TextWidget", "PriceWidget"] },
    ],
  },
  onlyInside: "TableWidget",
  extractTextAttributes: ["cell1", "cell2", "cell3", "cell4"],
});
