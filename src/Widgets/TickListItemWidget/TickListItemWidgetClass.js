import * as Scrivito from "scrivito";
import { registerTextExtract } from "../../utils/textExtractRegistry";

const TickListItemWidget = Scrivito.provideWidgetClass("TickListItemWidget", {
  onlyInside: "TickListWidget",
  attributes: {
    statement: "string",
  },
  extractTextAttributes: ["statement"],
});

registerTextExtract("TickListItemWidget", [
  { attribute: "statement", type: "string" },
]);

export default TickListItemWidget;
