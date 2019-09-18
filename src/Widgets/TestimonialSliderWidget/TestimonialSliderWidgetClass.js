import * as Scrivito from "scrivito";

const TestimonialSliderWidget = Scrivito.provideWidgetClass(
  "TestimonialSliderWidget",
  {
    attributes: {
      testimonials: ["widgetlist", { only: "TestimonialWidget" }],
    },
  }
);

export default TestimonialSliderWidget;
