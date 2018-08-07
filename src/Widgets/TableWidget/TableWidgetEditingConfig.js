import * as Scrivito from "scrivito";
import IconWidget from "../IconWidget/IconWidgetClass";
import PriceWidget from "../PriceWidget/PriceWidgetClass";
import TableRowWidget from "../TableRowWidget/TableRowWidgetClass";
import tableWidgetIcon from "../../assets/images/table_widget.svg";
import TextWidget from "../TextWidget/TextWidgetClass";

Scrivito.provideEditingConfig("TableWidget", {
  title: "Table",
  thumbnail: tableWidgetIcon,
  attributes: {
    rows: {
      title: "Rows",
    },
    summaryRows: {
      title: "Summary rows",
    },
  },
  properties: ["rows", "summaryRows"],
  initialContent: {
    header1: "Column header 1",
    header2: "Column header 2",
    header3: "Column header 3",
    header4: "Column header 4",
    rows: [
      new TableRowWidget({
        cell1: "Row 1",
        cell2: [new TextWidget({})],
        cell3: [new TextWidget({})],
        cell4: [new TextWidget({})],
      }),
      new TableRowWidget({
        cell1: "Row 2",
        cell2: [new TextWidget({})],
        cell3: [new TextWidget({})],
        cell4: [new TextWidget({})],
      }),
      new TableRowWidget({
        cell1: "Row 3",
        cell2: [new IconWidget({ icon: "fa-times" })],
        cell3: [new IconWidget({ icon: "fa-check" })],
        cell4: [new IconWidget({ icon: "fa-check" })],
      }),
    ],
    summaryRows: [
      new TableRowWidget({
        cell1: "Total",
        cell2: [new PriceWidget({ currency: "$", price: "20", period: "/mo" })],
        cell3: [new PriceWidget({ currency: "$", price: "30", period: "/mo" })],
        cell4: [new PriceWidget({ currency: "$", price: "40", period: "/mo" })],
      }),
    ],
  },
});
