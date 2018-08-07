import * as Scrivito from "scrivito";
import { registerTextExtract } from "../../utils/textExtractRegistry";

const BoxWidget = Scrivito.provideWidgetClass("BoxWidget", {
  attributes: {
    body: "widgetlist",
    boxStyle: ["enum", { values: ["transparent", "white"] }],
    useOffset: ["enum", { values: ["yes", "no"] }],
  },
});

registerTextExtract("BoxWidget", [{ attribute: "body", type: "widgetlist" }]);

export default BoxWidget;
