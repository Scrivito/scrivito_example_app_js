import * as Scrivito from "scrivito";
import { registerTextExtract } from "../../utils/textExtractRegistry";

const PriceCalculatorWidget = Scrivito.provideWidgetClass("PriceCalculatorWidget", {
  attributes: {
    image: ["reference", { only: "Image" }],
    position: "string",
    name: "string",
  },
});

registerTextExtract("PriceCalculatorWidget", [
  { attribute: "position", type: "string" },
  { attribute: "name", type: "string" },
]);

export default PriceCalculatorWidget;
