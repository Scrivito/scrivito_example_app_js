import * as Scrivito from "scrivito";

const PricingSpecWidget = Scrivito.provideWidgetClass("PricingSpecWidget", {
  onlyInside: "PricingWidget",
  attributes: {
    variable: "string",
    unit: "string",
  },
  extractTextAttributes: ["variable", "unit"],
});

export default PricingSpecWidget;
