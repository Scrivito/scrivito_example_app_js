import * as Scrivito from "scrivito";
import tableRowWidgetIcon from "../../assets/images/table_row_widget.svg";

Scrivito.provideEditingConfig("TableRowWidget", {
  title: "Table Row",
  thumbnail: tableRowWidgetIcon,
  titleForContent: (widget) => widget.get("cell1"),
});
