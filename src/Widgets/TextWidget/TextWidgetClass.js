import * as Scrivito from "scrivito";

const TextWidget = Scrivito.provideWidgetClass("TextWidget", {
  attributes: {
    text: "html",
    alignment: ["enum", { values: ["left", "center", "right"] }],
  },
  extractTextAttributes: ["text"],
});

export default TextWidget;
