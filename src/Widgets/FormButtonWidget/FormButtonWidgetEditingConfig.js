import * as Scrivito from "scrivito";
import formButtonWidgetIcon from "../../assets/images/form_button_widget.svg";

Scrivito.provideEditingConfig("FormButtonWidget", {
  title: "Form Button",
  thumbnail: formButtonWidgetIcon,
  attributes: {
    buttonText: {
      title: "Button Text",
    },
    alignment: {
      title: "Alignment",
      description: "Default: Full width",
      values: [
        { value: "left", title: "Left" },
        { value: "center", title: "Center" },
        { value: "right", title: "Right" },
        { value: "block", title: "Full width" },
      ],
    },
  },
  properties: ["buttonText", "alignment"],
  initialContent: {
    buttonText: "send message",
    alignment: "block",
  },
});
