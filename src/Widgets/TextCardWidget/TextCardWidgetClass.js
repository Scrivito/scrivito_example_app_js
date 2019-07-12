import * as Scrivito from "scrivito";
import { registerTextExtract } from "../../utils/textExtractRegistry";

const TextCardWidget = Scrivito.provideWidgetClass("TextCardWidget", {
  attributes: {
    header: "string",
    headerColor: ["enum", { values: ["peach", "pink", "black", "green"] }],
    title: "string",
    description: "html",
  },
});

registerTextExtract("TextCardWidget", [
  { attribute: "header", type: "string" },
  { attribute: "title", type: "string" },
  { attribute: "description", type: "html" },
]);

export default TextCardWidget;
