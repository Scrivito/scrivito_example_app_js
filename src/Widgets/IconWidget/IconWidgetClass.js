import * as Scrivito from "scrivito";

const IconWidget = Scrivito.provideWidgetClass("IconWidget", {
  attributes: {
    icon: "string",
    size: [
      "enum",
      { values: ["fa-1x", "fa-lg", "fa-2x", "fa-3x", "fa-4x", "fa-5x"] },
    ],
    alignment: ["enum", { values: ["left", "center", "right"] }],
    link: "link",
  },
});

export default IconWidget;
