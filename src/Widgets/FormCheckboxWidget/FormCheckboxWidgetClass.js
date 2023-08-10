import * as Scrivito from "scrivito";

export const FormCheckboxWidget = Scrivito.provideWidgetClass(
  "FormCheckboxWidget",
  {
    attributes: {
      type: [
        "enum",
        {
          values: ["custom", "accept_terms"].concat(
            process.env.ENABLE_NEOLETTER_FORM_BUILDER_SUBSCRIPTION_FEATURE
              ? ["subscription"]
              : []
          ),
        },
      ],
      customFieldName: "string",
      label: "string",
      required: "boolean",
      helpText: "html",
    },
  }
);
