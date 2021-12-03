import * as Scrivito from "scrivito";

const FormSubmitButtonWidget = Scrivito.provideWidgetClass(
  "FormSubmitButtonWidget",
  {
    attributes: {
      headline: "string",
    },
    extractTextAttributes: ["headline"],
  }
);

export default FormSubmitButtonWidget;
