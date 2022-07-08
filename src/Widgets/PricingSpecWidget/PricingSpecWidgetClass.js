import * as Scrivito from "scrivito";

export const PricingSpecWidget = Scrivito.provideWidgetClass(
  "PricingSpecWidget",
  {
    onlyInside: "PricingWidget",
    attributes: {
      variable: "string",
      unit: "string",
    },
    extractTextAttributes: ["variable", "unit"],
  }
);
