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
  validations: [customFieldNameValidation],
  titleForContent: (widget) =>
    [widget.get("customFieldName"), truncate(widget.get("hiddenValue"))]
      .filter((e) => e)
      .join(": "),
});
