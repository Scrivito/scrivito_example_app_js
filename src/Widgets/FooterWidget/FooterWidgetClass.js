import * as Scrivito from "scrivito";
import { registerTextExtract } from "../../utils/textExtractRegistry";

const FooterWidget = Scrivito.provideWidgetClass("FooterWidget", {
  attributes: {
    image: ["reference", { only: "Image" }],
    position: "string",
    name: "string",
  },
});

registerTextExtract("FooterWidget", [
  { attribute: "position", type: "string" },
  { attribute: "name", type: "string" },
]);

export default FooterWidget;
