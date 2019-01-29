import * as Scrivito from "scrivito";
import { registerTextExtract } from "../../utils/textExtractRegistry";

const CarouselWidget = Scrivito.provideWidgetClass("CarouselWidget", {
  attributes: {
    images: ["referencelist", { only: ["Image"] }],
    showDescription: ["enum", { values: ["yes", "no"] }],
    descriptionLogo: ["reference", { only: ["Image"] }],
    description: "widgetlist",
  },
});

registerTextExtract("CarouselWidget", [
  { attribute: "description", type: "widgetlist" },
]);

export default CarouselWidget;
