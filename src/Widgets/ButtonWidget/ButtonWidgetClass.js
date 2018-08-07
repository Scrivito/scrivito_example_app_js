import * as Scrivito from "scrivito";

const ButtonWidget = Scrivito.provideWidgetClass("ButtonWidget", {
  attributes: {
    target: "link",
    alignment: ["enum", { values: ["left", "center", "right"] }],
    style: ["enum", { values: ["btn-primary", "btn-clear"] }],
  },
});

export default ButtonWidget;
