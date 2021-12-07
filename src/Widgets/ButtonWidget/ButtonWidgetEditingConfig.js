import * as Scrivito from "scrivito";
import buttonWidgetIcon from "../../assets/images/button_widget.svg";

Scrivito.provideEditingConfig("ButtonWidget", {
  title: "Button",
  thumbnail: buttonWidgetIcon,
  attributes: {
    alignment: {
      title: "Alignment",
      description: "Default: Left",
      values: [
        { value: "left", title: "Left" },
        { value: "center", title: "Center" },
        { value: "right", title: "Right" },
        { value: "block", title: "Full width" },
      ],
    },
    style: {
      title: "Background color",
      description: "Default: Primary color",
      values: [
        { value: "btn-primary", title: "Primary color" },
        { value: "btn-clear", title: "Transparent" },
      ],
    },
    target: {
      title: "Target",
      description: "The target and text of the button.",
    },
  },
  properties: ["target", "alignment", "style"],
  initialContent: {
    alignment: "left",
    style: "btn-primary",
  },
  validations: [
    [
      "target",

      (target) => {
        if (!target) {
          return {
            message: "The button target should be set.",
            severity: "warning",
          };
        }
        if (!target.title()) {
          return {
            message: "Providing the button title is recommended.",
            severity: "info",
          };
        }
      },
    ],
  ],
});
