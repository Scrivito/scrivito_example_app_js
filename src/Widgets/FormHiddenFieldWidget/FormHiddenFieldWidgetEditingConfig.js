import * as Scrivito from "scrivito";
import formHiddenFieldWidgetIcon from "../../assets/images/form_hidden_field_widget.svg";
import { customFieldNameValidation } from "../FormContainerWidget/utils/validations/customFieldNameValidation";
import { isCustomType } from "../FormContainerWidget/utils/isCustomType";
import { typeValidation } from "../FormContainerWidget/utils/validations/typeValidation";
import { getFieldName } from "../FormContainerWidget/utils/getFieldName";

Scrivito.provideEditingConfig("FormHiddenFieldWidget", {
  title: "Hidden Form Field",
  thumbnail: formHiddenFieldWidgetIcon,
  attributes: {
    type: {
      title: "Input type",
      values: [
        { value: "custom", title: "Custom" },
        ...(process.env.ENABLE_NEOLETTER_FORM_BUILDER_SUBSCRIPTION_FEATURE
          ? [{ value: "subscription", title: "Subscription" }]
          : []),
      ],
    },
    customFieldName: { title: "Field name" },
    hiddenValue: {
      title: "Hidden value",
      description: "This value is sent on every submission of the form.",
    },
  },
  properties: (widget) => {
    if (process.env.ENABLE_NEOLETTER_FORM_BUILDER_SUBSCRIPTION_FEATURE) {
      if (!isCustomType(widget)) {
        return ["type", "hiddenValue"];
      }

      return ["type", "customFieldName", "hiddenValue"];
    }

    return ["customFieldName", "hiddenValue"];
  },
  initialContent: {
    type: "custom",
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
        message: "Hidden fields should be added in the properties of the form.",
        severity: "info",
      };
    },
  ].concat(
    process.env.ENABLE_NEOLETTER_FORM_BUILDER_SUBSCRIPTION_FEATURE
      ? [
          typeValidation,
          [
            "hiddenValue",
            (hiddenValue, { widget }) => {
              const fieldName = getFieldName(widget);

              if (fieldName === "subscription" && hiddenValue !== "on") {
                return {
                  message:
                    "Please enter 'on' to activate the subscription process on every submission.",
                  severity: "warning",
                };
              }
            },
          ],
        ]
      : []
  ),
  titleForContent: (widget) => {
    const fieldName = getFieldName(widget);

    return `Hidden Form Field: ${[fieldName, widget.get("hiddenValue")]
      .filter((e) => e)
      .join(" - ")}`;
  },
});
