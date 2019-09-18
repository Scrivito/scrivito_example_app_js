import * as Scrivito from "scrivito";
import { registerTextExtract } from "../../utils/textExtractRegistry";

const TickListWidget = Scrivito.provideWidgetClass("TickListWidget", {
  attributes: {
    items: ["widgetlist", { only: "TickListItemWidget" }],
  },
  extractTextAttributes: ["items"],
});

registerTextExtract("TickListWidget", [
  { attribute: "items", type: "widgetlist" },
]);

export default TickListWidget;
