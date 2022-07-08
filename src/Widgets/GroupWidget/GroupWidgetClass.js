import * as Scrivito from "scrivito";

export const GroupWidget = Scrivito.provideWidgetClass("GroupWidget", {
  attributes: {
    content: "widgetlist",
  },
  extractTextAttributes: ["content"],
});
