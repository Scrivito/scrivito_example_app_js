import * as Scrivito from "scrivito";

export const FormHiddenFieldWidget =
  process.env.ENABLE_NEOLETTER_FORM_BUILDER &&
  Scrivito.provideWidgetClass("FormHiddenFieldWidget", {
    onlyInside: "FormContainerWidget",
    attributes: {
      customFieldName: "string",
      hiddenValue: "string",
    },
  });
