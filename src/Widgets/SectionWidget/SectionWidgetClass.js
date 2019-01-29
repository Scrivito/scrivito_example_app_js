import * as Scrivito from "scrivito";
import { registerTextExtract } from "../../utils/textExtractRegistry";

const SectionWidget = Scrivito.provideWidgetClass("SectionWidget", {
  attributes: {
    content: "widgetlist",
    useFullWidth: ["enum", { values: ["yes", "no"] }],
    useFullHeight: ["enum", { values: ["yes", "no"] }],
    showPadding: ["enum", { values: ["yes", "no"] }],
    backgroundColor: [
      "enum",
      {
        values: [
          "white",
          "greywhite",
          "greylight",
          "greymiddle",
          "greydark",
          "brand-primary",
          "brand-secondary",
        ],
      },
    ],
    backgroundImage: ["reference", { only: ["Image"] }],
  },
});

registerTextExtract("SectionWidget", [
  { attribute: "content", type: "widgetlist" },
]);

export default SectionWidget;
