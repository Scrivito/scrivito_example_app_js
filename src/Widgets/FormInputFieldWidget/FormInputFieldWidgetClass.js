import * as Scrivito from "scrivito";

export const FormInputFieldWidget = Scrivito.provideWidgetClass(
  "FormInputFieldWidget",
  {
    attributes: {
      label: "string",
      placeholder: "string",
      required: "boolean",
      helpText: "html",
      type: [
        "enum",
        {
          values: [
            "email",
            "name",
            "given_name",
            "family_name",
            "middle_name",
            "company",
            "phone_number",
            "custom",
          ],
        },
      ],
      customType: ["enum", { values: ["single_line", "multi_line"] }],
      customFieldName: "string",
    },
  }
);
