import * as Scrivito from "scrivito";

const FormTextInputWidget = Scrivito.provideWidgetClass("FormTextInputWidget", {
  attributes: {
    headline: "string",
  },
  extractTextAttributes: ["headline"],
});

export default FormTextInputWidget;
