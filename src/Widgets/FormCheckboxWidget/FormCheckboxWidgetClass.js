import * as Scrivito from "scrivito";
import { ENABLE_NEOLETTER_FORM_BUILDER } from "../../App";

export const FormCheckboxWidget =
  ENABLE_NEOLETTER_FORM_BUILDER &&
  Scrivito.provideWidgetClass("FormCheckboxWidget", {
    attributes: {
      type: ["enum", { values: ["custom", "accept_terms"] }],
      customFieldName: "string",
      label: "string",
      required: "boolean",
      helpText: "html",
    },
  });
