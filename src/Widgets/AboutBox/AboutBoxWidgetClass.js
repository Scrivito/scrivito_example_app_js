import * as Scrivito from "scrivito";
import { registerTextExtract } from "../../utils/textExtractRegistry";

const AboutBoxWidget = Scrivito.provideWidgetClass("AboutBoxWidget", {
  attributes: {
    image: ["reference", { only: "Image" }],
    position: "string",
    name: "string",
  },
});

registerTextExtract("AboutBoxWidget", [
  { attribute: "position", type: "string" },
  { attribute: "name", type: "string" },
]);

export default AboutBoxWidget;
