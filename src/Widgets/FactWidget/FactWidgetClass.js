import * as Scrivito from "scrivito";
import { registerTextExtract } from "../../utils/textExtractRegistry";

const FactWidget = Scrivito.provideWidgetClass("FactWidget", {
  attributes: {
    key: "string",
    value: "string",
  },
});

registerTextExtract("FactWidget", [
  { attribute: "key", type: "string" },
  { attribute: "value", type: "string" },
]);

export default FactWidget;
