import * as Scrivito from "scrivito";

const TestimonialWidget = Scrivito.provideWidgetClass("TestimonialWidget", {
  onlyInside: "TestimonialSliderWidget",
  attributes: {
    testimonial: "string",
    author: "string",
    authorImage: ["reference", { only: ["Image"] }],
  },
  extractTextAttributes: ["testimonial"],
});

export default TestimonialWidget;
