import * as Scrivito from "scrivito";

const GroupWidget = Scrivito.provideWidgetClass("GroupWidget", {
  attributes: {
    content: "widgetlist",
  },
  extractTextAttributes: ["content"],
});

export default GroupWidget;
