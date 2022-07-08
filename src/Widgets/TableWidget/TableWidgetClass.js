import * as Scrivito from "scrivito";

export const TableWidget = Scrivito.provideWidgetClass("TableWidget", {
  attributes: {
    rows: ["widgetlist", { only: "TableRowWidget" }],
    summaryRows: ["widgetlist", { only: "TableRowWidget" }],
    header1: "string",
    header2: "string",
    header3: "string",
    header4: "string",
  },
});
