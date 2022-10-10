import * as Scrivito from "scrivito";

export const FormCheckboxWidget =
  process.env.ENABLE_NEOLETTER_FORM_BUILDER &&
  Scrivito.provideWidgetClass("FormCheckboxWidget", {
    attributes: {
      type: ["enum", { values: ["custom", "accept_terms"] }],
      customFieldName: "string",
      label: "string",
      required: "boolean",
      helpText: "html",
    },
  });
