import * as Scrivito from "scrivito";

const FormTextInputWidget = Scrivito.provideWidgetClass("FormTextInputWidget", {
  attributes: {
    label: "string",
    placeholder: "string",
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
