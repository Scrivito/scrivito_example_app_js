import * as Scrivito from "scrivito";
import { registerTextExtract } from "../../utils/textExtractRegistry";

const HeadlineWidget = Scrivito.provideWidgetClass("HeadlineWidget", {
  attributes: {
    headline: "string",
    level: ["enum", { values: ["h1", "h2", "h3", "h4", "h5", "h6"] }],
    style: ["enum", { values: ["h1", "h2", "h3", "h4", "h5", "h6"] }],
    alignment: ["enum", { values: ["left", "center", "right"] }],
    showDividingLine: ["enum", { values: ["yes", "no"] }],
    showMargin: ["enum", { values: ["yes", "no"] }],
  },
});

registerTextExtract("HeadlineWidget", [
  { attribute: "headline", type: "string" },
]);

export default HeadlineWidget;
