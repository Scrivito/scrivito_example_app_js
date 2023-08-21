import * as Scrivito from "scrivito";

export const FormHiddenFieldWidget = Scrivito.provideWidgetClass(
  "FormHiddenFieldWidget",
  {
    onlyInside: "FormContainerWidget",
    attributes: {
      type: [
        "enum",
        {
          values: ["custom"].concat(
            process.env.ENABLE_NEOLETTER_FORM_BUILDER_SUBSCRIPTION_FEATURE
              ? ["subscription"]
              : []
          ),
        },
      ],
      customFieldName: "string",
      hiddenValue: "string",
    },
  }
);
