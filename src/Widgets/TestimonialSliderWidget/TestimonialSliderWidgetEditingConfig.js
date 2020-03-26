import * as Scrivito from "scrivito";
import testimonialSliderWidgetIcon from "../../assets/images/testimonial_slider_widget.svg";
import TestimonialWidget from "../TestimonialWidget/TestimonialWidgetClass";

Scrivito.provideEditingConfig("TestimonialSliderWidget", {
  title: "Testimonial Slider",
  thumbnail: testimonialSliderWidgetIcon,
  attributes: {
    testimonials: {
      title: "Testimonials",
    },
  },
  properties: ["testimonials"],
  initialContent: {
    testimonials: [new TestimonialWidget({})],
  },
  validations: [
    [
      "testimonials",

      (testimonials) => {
        if (testimonials.length < 1) {
          return {
            message: "The testimonial slider must contain at least one entry.",
            severity: "error",
          };
        }
      },
    ],
  ],
});
