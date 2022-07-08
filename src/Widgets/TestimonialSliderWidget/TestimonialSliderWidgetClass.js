import * as Scrivito from "scrivito";

export const TestimonialSliderWidget = Scrivito.provideWidgetClass(
  "TestimonialSliderWidget",
  {
    attributes: {
      testimonials: ["widgetlist", { only: "TestimonialWidget" }],
    },
  }
);
