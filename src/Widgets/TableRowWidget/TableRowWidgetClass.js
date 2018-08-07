import * as Scrivito from "scrivito";
import { registerTextExtract } from "../../utils/textExtractRegistry";

const TableRowWidget = Scrivito.provideWidgetClass("TableRowWidget", {
  attributes: {
    cell1: "string",
    cell2: [
      "widgetlist",
      { only: ["IconWidget", "TextWidget", "PriceWidget"] },
    ],
    cell3: [
      "widgetlist",
      { only: ["IconWidget", "TextWidget", "PriceWidget"] },
    ],
    cell4: [
      "widgetlist",
      { only: ["IconWidget", "TextWidget", "PriceWidget"] },
    ],
  },
  onlyInside: "TableWidget",
});

registerTextExtract("TableRowWidget", [
  { attribute: "cell1", type: "string" },
  { attribute: "cell2", type: "widgetlist" },
  { attribute: "cell3", type: "widgetlist" },
  { attribute: "cell4", type: "widgetlist" },
]);

export default TableRowWidget;
