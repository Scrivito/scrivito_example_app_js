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
        values: ["left", "right", "top", "bottom", "zoom"],
      },
    ],
  },
});

export default ImageWidget;
