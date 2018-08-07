import * as Scrivito from "scrivito";
import { registerTextExtract } from "../../utils/textExtractRegistry";

const PriceWidget = Scrivito.provideWidgetClass("PriceWidget", {
  onlyInside: "TableRowWidget",
  attributes: {
    currency: "string",
    period: "string",
    price: "string",
  },
});

registerTextExtract("PriceWidget", [
  { attribute: "price", type: "string" },
  { attribute: "currency", type: "string" },
  { attribute: "period", type: "string" },
]);

export default PriceWidget;
