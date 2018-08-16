import * as Scrivito from "scrivito";
import { registerTextExtract } from "../../utils/textExtractRegistry";

const TestimonialSliderWidget = Scrivito.provideWidgetClass(
  "TestimonialSliderWidget",
  {
    attributes: {
      testimonials: ["widgetlist", { only: "TestimonialWidget" }],
    },
  }
);

registerTextExtract("TestimonialSliderWidget", [
  { attribute: "testimonials", type: "widgetlist" },
]);

export default TestimonialSliderWidget;
