import * as Scrivito from "scrivito";

const SectionWidget = Scrivito.provideWidgetClass("SectionWidget", {
  attributes: {
    content: "widgetlist",
    useFullWidth: "boolean",
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
  extractTextAttributes: ["content"],
});

export default SectionWidget;
