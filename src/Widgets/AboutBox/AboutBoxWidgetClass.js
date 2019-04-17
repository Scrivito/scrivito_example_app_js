import * as Scrivito from "scrivito";
import { registerTextExtract } from "../../utils/textExtractRegistry";

const AboutBoxWidget = Scrivito.provideWidgetClass("AboutBoxWidget", {
  attributes: {
    image: ["reference", { only: "Image" }],
    position: "string",
    name: "string",
    email: "string",
  },
});

registerTextExtract("AboutBoxWidget", [
  { attribute: "position", type: "string" },
  { attribute: "name", type: "string" },
  { attribute: "email", type: "string" },
]);

export default AboutBoxWidget;
