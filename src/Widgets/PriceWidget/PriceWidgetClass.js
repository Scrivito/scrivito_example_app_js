import * as Scrivito from "scrivito";

export const PriceWidget = Scrivito.provideWidgetClass("PriceWidget", {
  onlyInside: "TableRowWidget",
  attributes: {
    currency: "string",
    period: "string",
    price: "string",
  },
  extractTextAttributes: ["price", "currency", "period"],
});
