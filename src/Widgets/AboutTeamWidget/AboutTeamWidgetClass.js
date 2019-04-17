import * as Scrivito from "scrivito";
import { registerTextExtract } from "../../utils/textExtractRegistry";

const AboutTeamWidget = Scrivito.provideWidgetClass("AboutTeamWidget", {
  attributes: {
    members: ["widgetlist", { only: "AboutBoxWidget" }],
  },
});

registerTextExtract("AboutTeamWidget", [
  { attribute: "members", type: "widgetlist" },
]);

export default AboutTeamWidget;
