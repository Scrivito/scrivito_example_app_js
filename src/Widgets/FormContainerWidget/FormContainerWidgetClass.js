import * as Scrivito from "scrivito";

const FormContainerWidget = Scrivito.provideWidgetClass("FormContainerWidget", {
  attributes: {
    headline: "string",
  },
  extractTextAttributes: ["headline"],
});

export default FormContainerWidget;
