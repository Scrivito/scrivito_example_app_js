import * as Scrivito from "scrivito";

export const FormCheckboxWidget = Scrivito.provideWidgetClass(
  "FormCheckboxWidget",
  {
    attributes: {
      type: ["enum", { values: ["custom", "accept_terms"] }],
      customFieldName: "string",
      label: "string",
      required: "boolean",
      helpText: "html",
    },
  }
);
