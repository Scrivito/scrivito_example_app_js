import * as Scrivito from "scrivito";
import { registerTextExtract } from "../../utils/textExtractRegistry";

const FeaturePanelWidget = Scrivito.provideWidgetClass("FeaturePanelWidget", {
  attributes: {
    icon: "string",
    headline: "string",
    description: "string",
  },
});

registerTextExtract("FeaturePanelWidget", [
  { attribute: "headline", type: "string" },
  { attribute: "description", type: "string" },
]);

export default FeaturePanelWidget;
