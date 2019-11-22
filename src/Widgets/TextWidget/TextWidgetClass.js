import * as Scrivito from "scrivito";
import { registerTextExtract } from "../../utils/textExtractRegistry";

const TextWidget = Scrivito.provideWidgetClass("TextWidget", {
  attributes: {
    text: "html",
    alignment: ["enum", { values: ["left", "center", "right"] }],
  },
  extractTextAttributes: ["text"],
});

registerTextExtract("TextWidget", [{ attribute: "text", type: "html" }]);

export default TextWidget;
