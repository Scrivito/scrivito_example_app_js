import * as Scrivito from "scrivito";
import { registerTextExtract } from "../../utils/textExtractRegistry";

const TestimonialWidget = Scrivito.provideWidgetClass("TestimonialWidget", {
  onlyInside: "TestimonialSliderWidget",
  attributes: {
    testimonial: "string",
    author: "string",
    authorImage: ["reference", { only: ["Image"] }],
  },
});

registerTextExtract("TestimonialWidget", [
  { attribute: "testimonial", type: "string" },
]);

export default TestimonialWidget;
