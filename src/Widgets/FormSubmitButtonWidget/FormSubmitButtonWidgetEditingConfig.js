import * as Scrivito from "scrivito";
import formSubmitButtonWidgetIcon from "../../assets/images/form_submit_button_widget.svg";

Scrivito.provideEditingConfig("FormSubmitButtonWidget", {
  title: "Form: Submit Button",
  thumbnail: formSubmitButtonWidgetIcon,
  attributes: {
    buttonText: {
      title: "Button Text",
    },
    alignment: {
      title: "Alignment",
      description: "Default: Left",
      values: [
        { value: "left", title: "Left" },
        { value: "center", title: "Center" },
        { value: "right", title: "Right" },
      ],
    },
  },
  properties: ["buttonText", "alignment"],
  initialContent: {
    buttonText: "send message",
    alignment: "left",
  },
});
