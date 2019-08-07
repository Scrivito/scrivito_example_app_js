import * as Scrivito from "scrivito";
import { registerTextExtract } from "../../utils/textExtractRegistry";

const PriceCalculatorWidget = Scrivito.provideWidgetClass("PriceCalculatorWidget", {
  attributes: {
    image: ["reference", { only: "Image" }],
    position: "string",
    name: "string",
    headerTitle: "string",
    headerDesc: "html",
  },
});

registerTextExtract("PriceCalculatorWidget", [
  { attribute: "position", type: "string" },
  { attribute: "name", type: "string" },
  { attribute: "headerTitle", type: "string" },
  { attribute: "headerDesc", type: "html" },
]);

export default PriceCalculatorWidget;
