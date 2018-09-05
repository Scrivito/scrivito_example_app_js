import * as Scrivito from "scrivito";

const ImageWidget = Scrivito.provideWidgetClass("ImageWidget", {
  attributes: {
    image: "reference",
    alignment: ["enum", { values: ["left", "center", "right"] }],
    alternativeText: "string",
    link: "link",
    animation: [
      "enum",
      {
        values: [
          "",
          "fade-right",
          "fade-left",
          "fade-down",
          "fade-up",
          "zoom-in",
        ],
      },
    ],
  },
});

export default ImageWidget;
