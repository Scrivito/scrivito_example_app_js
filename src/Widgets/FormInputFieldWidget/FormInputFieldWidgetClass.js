import * as Scrivito from "scrivito";

const FormInputFieldWidget = Scrivito.provideWidgetClass(
  "FormInputFieldWidget",
  {
    attributes: {
      label: "string",
      placeholder: "string",
      required: "boolean",
      helpText: "html",
      type: [
        "enum",
        {
          values: ["email", "name"],
        },
      ],
    },
    extractTextAttributes: [],
  }
);

export default FormInputFieldWidget;
