import * as Scrivito from "scrivito";
import formInputFieldWidgetIcon from "../../assets/images/form_input_field_widget.svg";

Scrivito.provideEditingConfig("FormInputFieldWidget", {
  title: "Form Input Field",
  thumbnail: formInputFieldWidgetIcon,
  attributes: {
    required: { title: "Mandatory" },
    type: {
      title: "Input type",
      values: [
        { value: "custom_input", title: "Custom single-line" },
        { value: "custom_text_area", title: "Custom multi-line" },
        { value: "email", title: "Email" },
        { value: "name", title: "Name" },
        { value: "given_name", title: "Given name" },
        { value: "family_name", title: "Family name" },
        { value: "middle_name", title: "Middle name" },
        { value: "company", title: "Company" },
        { value: "phone_number", title: "Telephone number" },
      ],
    },
    customFieldName: { title: "Custom field name" },
    helpText: { title: "Help text" },
  },
  initialContent: {
    label: "Email",
    placeholder: "Your email address",
    type: "email",
    customFieldName: "custom_field_name",
  },
  properties: (widget) => [
    "type",
    [
      "customFieldName",
      { enabled: !!widget.get("type")?.startsWith("custom_") },
    ],
    "label",
    "placeholder",
    "required",
    "helpText",
  ],
  validations: [
    [
      "type",
      (type) => {
        if (!type) {
          return "Select the input type.";
        }
      },
    ],
    [
      "customFieldName",
      (customFieldName, { widget }) => {
        if (!widget.get("type")?.startsWith("custom")) {
          return;
        }

        if (!customFieldName.startsWith("custom_")) {
          return 'Custom field names must start with "custom_".';
        }

        if (customFieldName.length <= "custom_".length) {
          return "Specify the custom field's name.";
        }

        if (customFieldName.match(/^[A-Za-z_][A-Za-z0-9_]*$/) === null) {
          return 'Custom field names may consist of the following characters: "a-z", "A-Z", "0-9", "_".';
        }

        if (customFieldName.length > 50) {
          return "Custom field names may be up to 50 characters long.";
        }
      },
    ],
  ],
});
