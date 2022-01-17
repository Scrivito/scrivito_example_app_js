import * as Scrivito from "scrivito";

const FormCheckboxWidget = Scrivito.provideWidgetClass("FormCheckboxWidget", {
  attributes: {
    type: ["enum", { values: ["custom", "accept_terms"] }],
    customFieldName: "string",
    label: "string",
    required: "boolean",
    helpText: "html",
  },
});

export default FormCheckboxWidget;
