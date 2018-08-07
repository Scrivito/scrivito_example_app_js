import * as Scrivito from "scrivito";
import { registerTextExtract } from "../../utils/textExtractRegistry";

const PricingSpecWidget = Scrivito.provideWidgetClass("PricingSpecWidget", {
  onlyInside: "PricingWidget",
  attributes: {
    variable: "string",
    unit: "string",
  },
});

registerTextExtract("PricingSpecWidget", [
  { attribute: "variable", type: "string" },
  { attribute: "unit", type: "string" },
]);

export default PricingSpecWidget;
