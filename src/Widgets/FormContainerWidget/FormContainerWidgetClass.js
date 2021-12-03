import * as Scrivito from "scrivito";

const FormContainerWidget = Scrivito.provideWidgetClass("FormContainerWidget", {
  attributes: {
    content: "widgetlist",
    formId: "string",
    submittedMessage: "string",
    submittingMessage: "string",
  },
  extractTextAttributes: ["content"],
});

export default FormContainerWidget;
