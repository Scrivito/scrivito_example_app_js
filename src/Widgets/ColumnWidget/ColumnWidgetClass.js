import * as Scrivito from "scrivito";
import { registerTextExtract } from "../../utils/textExtractRegistry";

const ColumnWidget = Scrivito.provideWidgetClass("ColumnWidget", {
  onlyInside: "ColumnContainerWidget",
  attributes: {
    colSize: "integer",
    content: "widgetlist",
  },
});

registerTextExtract("ColumnWidget", [
  { attribute: "content", type: "widgetlist" },
]);

export default ColumnWidget;
