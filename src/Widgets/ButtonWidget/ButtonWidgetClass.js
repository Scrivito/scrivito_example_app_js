import * as Scrivito from "scrivito";

export const ButtonWidget = Scrivito.provideWidgetClass("ButtonWidget", {
  attributes: {
    target: "link",
    alignment: ["enum", { values: ["left", "center", "right", "block"] }],
    style: ["enum", { values: ["btn-primary", "btn-clear"] }],
  },
});
