import * as Scrivito from "scrivito";
import { ENABLE_NEOLETTER_FORM_BUILDER } from "../../App";

export const FormContainerWidget =
  ENABLE_NEOLETTER_FORM_BUILDER &&
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
