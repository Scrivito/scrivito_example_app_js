import * as Scrivito from "scrivito";

const FormButtonWidget = Scrivito.provideWidgetClass("FormButtonWidget", {
  attributes: {
    buttonText: "string",
    alignment: ["enum", { values: ["left", "center", "right", "block"] }],
  },
  extractTextAttributes: ["buttonText"],
});

export default FormButtonWidget;
