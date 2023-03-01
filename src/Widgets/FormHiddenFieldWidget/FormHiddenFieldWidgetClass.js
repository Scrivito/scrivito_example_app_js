import * as Scrivito from "scrivito";

export const FormHiddenFieldWidget = Scrivito.provideWidgetClass(
  "FormHiddenFieldWidget",
  {
    onlyInside: "FormContainerWidget",
    attributes: {
      customFieldName: "string",
      hiddenValue: "string",
    },
  }
);
