import * as Scrivito from "scrivito";

Scrivito.provideEditingConfig("TableRowWidget", {
  title: "Table Row",
  titleForContent: widget => widget.get("cell1"),
});
