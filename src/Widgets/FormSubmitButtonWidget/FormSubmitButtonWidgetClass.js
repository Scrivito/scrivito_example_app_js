import * as Scrivito from "scrivito";

const FormSubmitButtonWidget = Scrivito.provideWidgetClass(
  "FormSubmitButtonWidget",
  {
    attributes: {
      buttonText: "string",
      alignment: ["enum", { values: ["left", "center", "right", "block"] }],
    },
    extractTextAttributes: ["buttonText"],
  }
);

export default FormSubmitButtonWidget;
