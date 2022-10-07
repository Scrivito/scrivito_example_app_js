import * as Scrivito from "scrivito";

export const FormContainerWidget =
  process.env.ENABLE_NEOLETTER_FORM_BUILDER &&
  Scrivito.provideWidgetClass("FormContainerWidget", {
    attributes: {
      content: "widgetlist",
      formId: "string",
      failedMessage: "string",
      submittedMessage: "string",
      submittingMessage: "string",
      hiddenFields: ["widgetlist", { only: "FormHiddenFieldWidget" }],
    },
    extractTextAttributes: ["content"],
  });
