import * as Scrivito from "scrivito";

const FormTextInputWidget = Scrivito.provideWidgetClass("FormTextInputWidget", {
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
});

export default FormTextInputWidget;
