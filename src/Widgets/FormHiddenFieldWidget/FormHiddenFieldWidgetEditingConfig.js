import { truncate } from "lodash-es";
import * as Scrivito from "scrivito";
import { customFieldNameValidation } from "../FormContainerWidget/utils/validations/customFieldNameValidation";
import { ENABLE_NEOLETTER_FORM_BUILDER } from "../../App";

ENABLE_NEOLETTER_FORM_BUILDER &&
  Scrivito.provideEditingConfig("FormHiddenFieldWidget", {
    title: "Hidden Field",
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
