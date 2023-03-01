import * as Scrivito from "scrivito";

export const FormButtonWidget = Scrivito.provideWidgetClass(
  "FormButtonWidget",
  {
    attributes: {
      buttonText: "string",
      alignment: ["enum", { values: ["left", "center", "right", "block"] }],
    },
    extractTextAttributes: ["buttonText"],
  }
);
