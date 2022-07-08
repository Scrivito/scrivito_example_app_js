import * as Scrivito from "scrivito";

export const ColumnContainerWidget = Scrivito.provideWidgetClass(
  "ColumnContainerWidget",
  {
    attributes: {
      columns: ["widgetlist", { only: "ColumnWidget" }],
      alignment: ["enum", { values: ["start", "center", "end", "stretch"] }],
    },
    extractTextAttributes: ["columns"],
  }
);
