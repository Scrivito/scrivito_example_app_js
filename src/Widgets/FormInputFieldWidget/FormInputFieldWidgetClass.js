import * as Scrivito from "scrivito";

const FormInputFieldWidget = Scrivito.provideWidgetClass(
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
          ],
        },
      ],
    },
    extractTextAttributes: [],
  }
);

export default FormInputFieldWidget;
