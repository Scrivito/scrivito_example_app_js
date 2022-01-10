import * as Scrivito from "scrivito";
import formInputFieldWidgetIcon from "../../assets/images/form_input_field_widget.svg";
import { isCustomType } from "../FormContainerWidget/utils/isCustomType";
import { customFieldNameValidation } from "../FormContainerWidget/utils/validations/customFieldNameValidation";
import { insideFormContainerValidation } from "../FormContainerWidget/utils/validations/insideFormContainerValidation";
import { typeValidation } from "../FormContainerWidget/utils/validations/typeValidation";

Scrivito.provideEditingConfig("FormInputFieldWidget", {
  title: "Form Input Field",
  thumbnail: formInputFieldWidgetIcon,
  attributes: {
    required: { title: "Mandatory" },
    type: {
      title: "Input type",
      values: [
        { value: "custom_text", title: "Custom single-line" },
        { value: "custom_textarea", title: "Custom multi-line" },
        { value: "email", title: "Email" },
        { value: "name", title: "Name" },
        { value: "given_name", title: "Given name" },
        { value: "family_name", title: "Family name" },
        { value: "middle_name", title: "Middle name" },
        { value: "company", title: "Company" },
        { value: "phone_number", title: "Phone number" },
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
    ["customFieldName", { enabled: isCustomType(widget.get("type")) }],
    "label",
    "placeholder",
    "required",
    "helpText",
  ],
  validations: [
    typeValidation,
    customFieldNameValidation,
    insideFormContainerValidation,
  ],
});
