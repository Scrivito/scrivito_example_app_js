import * as Scrivito from "scrivito";
import { registerTextExtract } from "../../utils/textExtractRegistry";
import "./TickListWidgetStyles.scss";

const TickListWidget = Scrivito.provideWidgetClass("TickListWidget", {
  attributes: {
    items: ["widgetlist", { only: "TickListItemWidget" }],
  },
});

registerTextExtract("TickListWidget", [
  { attribute: "items", type: "widgetlist" },
]);

export default TickListWidget;
