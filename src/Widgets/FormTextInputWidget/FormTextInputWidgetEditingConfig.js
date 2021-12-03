import * as Scrivito from "scrivito";
import formTextInputWidgetIcon from "../../assets/images/form_text_input_widget.svg";

Scrivito.provideEditingConfig("FormTextInputWidget", {
  title: "Form: Text Input",
  thumbnail: formTextInputWidgetIcon,
  attributes: {
    required: {
      title: "Mandatory",
    },
    type: {
      title: "Input Type",
      values: [
        { value: "email", title: "Email" },
        { value: "name", title: "Name" },
      ],
    },
  },
  initialContent: {
    label: "Email",
    placeholder: "Your email address",
    type: "email",
  },
  properties: ["required", "label", "placeholder", "type"],
});
