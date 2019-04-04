import * as Scrivito from "scrivito";
import { registerTextExtract } from "../../utils/textExtractRegistry";

const PriceBoxWidget = Scrivito.provideWidgetClass("PriceBoxWidget", {
  attributes: {
    image: ["reference", { only: "Image" }],
    position: "string",
    name: "string",
  },
});

registerTextExtract("PriceBoxWidget", [
  { attribute: "position", type: "string" },
  { attribute: "name", type: "string" },
]);

export default PriceBoxWidget;
