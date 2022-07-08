import * as Scrivito from "scrivito";

export const SectionWidget = Scrivito.provideWidgetClass("SectionWidget", {
  attributes: {
    content: "widgetlist",
    useFullWidth: "boolean",
    useFullHeight: "boolean",
    showPadding: "boolean",
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
