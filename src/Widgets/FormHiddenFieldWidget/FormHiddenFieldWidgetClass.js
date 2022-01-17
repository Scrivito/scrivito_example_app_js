import * as Scrivito from "scrivito";

const FormHiddenFieldWidget = Scrivito.provideWidgetClass(
  "FormHiddenFieldWidget",
  {
    onlyInside: "FormContainerWidget",
    attributes: {
      customFieldName: "string",
      hiddenValue: "string",
    },
    extractTextAttributes: [],
  }
);

export default FormHiddenFieldWidget;
