import * as Scrivito from "scrivito";

export const ImageWidget = Scrivito.provideWidgetClass("ImageWidget", {
  attributes: {
    image: ["reference", { only: "Image" }],
    alignment: ["enum", { values: ["left", "center", "right"] }],
    alternativeText: "string",
    link: "link",
    animation: [
      "enum",
      {
        values: [
          "none",
          "fadeInLeft",
          "fadeInRight",
          "fadeInDown",
          "fadeInUp",
          "zoomIn",
        ],
      },
    ],
  },
});
