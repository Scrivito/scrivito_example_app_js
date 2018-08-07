import * as Scrivito from "scrivito";
import { registerTextExtract } from "../../utils/textExtractRegistry";

const TickListItemWidget = Scrivito.provideWidgetClass("TickListItemWidget", {
  attributes: {
    statement: "string",
  },
  onlyInside: "TickListWidget",
});

registerTextExtract("TickListItemWidget", [
  { attribute: "statement", type: "string" },
]);

export default TickListItemWidget;
