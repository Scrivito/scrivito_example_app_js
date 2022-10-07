import * as Scrivito from "scrivito";
import formInputFieldWidgetIcon from "../../assets/images/form_input_field_widget.svg";
import { isCustomType } from "../FormContainerWidget/utils/isCustomType";
import { customFieldNameValidation } from "../FormContainerWidget/utils/validations/customFieldNameValidation";
import { insideFormContainerValidation } from "../FormContainerWidget/utils/validations/insideFormContainerValidation";
import { typeValidation } from "../FormContainerWidget/utils/validations/typeValidation";
import { ENABLE_NEOLETTER_FORM_BUILDER } from "../../App";

ENABLE_NEOLETTER_FORM_BUILDER &&
  Scrivito.provideEditingConfig("FormInputFieldWidget", {
    title: "Form Input Field",
    thumbnail: formInputFieldWidgetIcon,
    attributes: {
      required: { title: "Mandatory" },
      type: {
        title: "Input type",
        values: [
          { value: "name", title: "Name" },
          { value: "given_name", title: "Given name" },
          { value: "middle_name", title: "Middle name" },
          { value: "family_name", title: "Family name" },
          { value: "email", title: "Email" },
          { value: "phone_number", title: "Phone number" },
          { value: "company", title: "Company" },
          { value: "custom", title: "Custom" },
        ],
      },
      customType: {
        title: "Custom input type",
        values: [
          { value: "single_line", title: "Single-line" },
          { value: "multi_line", title: "Multi-line" },
        ],
      },
      customFieldName: { title: "Field name" },
      helpText: { title: "Help text" },
    },
    initialContent: {
      label: "Custom field",
      placeholder: "Your custom field",
      type: "custom",
      customType: "single_line",
      customFieldName: "custom_field_name",
    },
    properties: (widget) => {
      if (widget.get("type") === "custom") {
        return [
          "type",
          "customType",
          "customFieldName",
          "label",
          "placeholder",
          "required",
          "helpText",
        ];
      }

      return ["type", "label", "placeholder", "required", "helpText"];
    },
    validations: [
      typeValidation,
      [
        "customType",
        (customType, { widget }) => {
          if (isCustomType(widget) && !customType) {
            return "Select the custom input type.";
          }
        },
      ],
      customFieldNameValidation,
      insideFormContainerValidation,
    ],
  });
