import * as Scrivito from "scrivito";

export const DataListWidget = Scrivito.provideWidgetClass("DataListWidget", {
  attributes: {
    content: "widgetlist",
    data: "datalocator",
  },
});
