import * as Scrivito from "scrivito";
import formInputFieldWidgetIcon from "../../assets/images/form_input_field_widget.svg";

Scrivito.provideEditingConfig("FormInputFieldWidget", {
  title: "Form Input Field",
  thumbnail: formInputFieldWidgetIcon,
  attributes: {
    required: { title: "Mandatory" },
    type: {
      title: "Input Type",
      values: [
        { value: "email", title: "Email" },
        { value: "name", title: "Name" },
      ],
    },
    helpText: { title: "Help Text" },
  },
  initialContent: {
    label: "Email",
    placeholder: "Your email address",
    type: "email",
  },
  properties: ["type", "label", "placeholder", "required", "helpText"],
});
