import * as Scrivito from "scrivito";
import columnContainerWidgetIcon from "../../assets/images/column_container_widget.svg";
import ColumnWidget from "../ColumnWidget/ColumnWidgetClass";

Scrivito.provideEditingConfig("ColumnContainerWidget", {
  title: "Columns",
  thumbnail: columnContainerWidgetIcon,
  propertiesGroups: [
    {
      title: "Columns layout",
      component: "ColumnsEditorTab",
    },
  ],
  initialContent: {
    columns: [
      new ColumnWidget({ colSize: 4 }),
      new ColumnWidget({ colSize: 4 }),
      new ColumnWidget({ colSize: 4 }),
    ],
    alignment: "start",
  },
});
