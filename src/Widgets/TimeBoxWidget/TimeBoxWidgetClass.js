import * as Scrivito from "scrivito";
import { registerTextExtract } from "../../utils/textExtractRegistry";

const TimeBoxWidget = Scrivito.provideWidgetClass("TimeBoxWidget", {
  attributes: {
    content: "widgetlist",
    displayFrom: 'date',
    displayUntil: 'date',
  },
});

registerTextExtract("TimeBoxWidget", [
  { attribute: "content", type: "widgetlist" },
]);

export default TimeBoxWidget;
