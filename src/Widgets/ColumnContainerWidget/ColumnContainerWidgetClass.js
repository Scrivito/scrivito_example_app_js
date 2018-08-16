import * as Scrivito from "scrivito";
import { registerTextExtract } from "../../utils/textExtractRegistry";

const ColumnContainerWidget = Scrivito.provideWidgetClass(
  "ColumnContainerWidget",
  {
    attributes: {
      columns: ["widgetlist", { only: "ColumnWidget" }],
      alignment: ["enum", { values: ["start", "center", "end", "stretch"] }],
    },
  }
);

registerTextExtract("ColumnContainerWidget", [
  { attribute: "columns", type: "widgetlist" },
]);

export default ColumnContainerWidget;
