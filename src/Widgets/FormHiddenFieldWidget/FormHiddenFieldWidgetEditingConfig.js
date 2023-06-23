import { truncate } from "lodash-es";
import * as Scrivito from "scrivito";
import formHiddenFieldWidgetIcon from "../../assets/images/form_hidden_field_widget.svg";
import { customFieldNameValidation } from "../FormContainerWidget/utils/validations/customFieldNameValidation";

Scrivito.provideEditingConfig("FormHiddenFieldWidget", {
  title: "Hidden Field",
  thumbnail: formHiddenFieldWidgetIcon,
  attributes: {
    customFieldName: { title: "Field name" },
    hiddenValue: {
      title: "Hidden value",
      description: "This value is sent on every submission of the form.",
    },
  },
  properties: ["customFieldName", "hiddenValue"],
  initialContent: {
    customFieldName: "custom_hidden_field",
  },
  validations: [
    customFieldNameValidation,
    (widget) => {
      if (
        widget
          .container()
          .get("hiddenFields")
          .map((w) => w.id())
          .includes(widget.id())
      ) {
        return;
      }

      return {
        message:
          "Usually hidden fields should be added in the widget properties of the form container.",
        severity: "info",
      };
    },
  ],
  titleForContent: (widget) =>
    truncate(
      `Hidden: ${[widget.get("customFieldName"), widget.get("hiddenValue")]
        .filter((e) => e)
        .join(" - ")}`,
      { length: 36 }
    ),
});
