import * as Scrivito from "scrivito";
import { registerTextExtract } from "../../utils/textExtractRegistry";

const TextCardWidget = Scrivito.provideWidgetClass("TextCardWidget", {
  attributes: {
    header: "string",
    headerColor: ["enum", { values: ["peach", "pink", "black"] }],
    title: "string",
    description: "string",
  },
});

registerTextExtract("TextCardWidget", [
  { attribute: "header", type: "string" },
  { attribute: "title", type: "string" },
  { attribute: "description", type: "string" },
]);

export default TextCardWidget;
