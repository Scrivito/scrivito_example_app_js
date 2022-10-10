import * as Scrivito from "scrivito";
import formButtonWidgetIcon from "../../assets/images/form_button_widget.svg";
import { insideFormContainerValidation } from "../FormContainerWidget/utils/validations/insideFormContainerValidation";

process.env.ENABLE_NEOLETTER_FORM_BUILDER &&
  Scrivito.provideEditingConfig("FormButtonWidget", {
    title: "Form Button",
    thumbnail: formButtonWidgetIcon,
    attributes: {
      buttonText: {
        title: "Button Text",
      },
      alignment: {
        title: "Alignment",
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
      alignment: "center",
    },
    validations: [
      insideFormContainerValidation,
      [
        "alignment",
        (alignment) => {
          if (!alignment) {
            return "Select the alignment.";
          }
        },
      ],
    ],
  });
