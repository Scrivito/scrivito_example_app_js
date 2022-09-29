import * as React from "react";
import * as Scrivito from "scrivito";
import Slider from "react-slick";

import { placeholderCss } from "../../utils/placeholderCss";
import { TestimonialWidget } from "../TestimonialWidget/TestimonialWidgetClass";
import { isImage } from "../../utils/isImage";
import "./TestimonialSliderWidget.scss";

Scrivito.provideComponent("TestimonialSliderWidget", ({ widget }) => {
  const testimonials = widget.get("testimonials");
  const settings = sliderSettings(testimonials);

  return (
    <div className="testimonial-slider-widget">
      <Slider {...settings}>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id()}>
            <h1 className="testimonial-slider-widget--quote-headline text-center">
              &quot;
            </h1>
            <Scrivito.ContentTag
              content={testimonial}
              attribute="testimonial"
              tag="p"
              className="h4 text-center"
            />
            <Scrivito.ContentTag
              content={testimonial}
              attribute="author"
              tag="p"
              className="small text-center"
            />
          </div>
        ))}
      </Slider>
      <AddTestimonial widget={widget} />
    </div>
  );
});

/* eslint-disable jsx-a11y/anchor-is-valid */
function sliderSettings(testimonials) {
  const testimonialAuthorImages = testimonials.map((testimonial) => {
    const authorImage = testimonial.get("authorImage");
    if (!isImage(authorImage)) {
      return (
        <img
          key={testimonial.id()}
          alt="fallback-img"
          className="image"
          src={fallbackImageUrl}
        />
      );
    }

    return (
      <Scrivito.BackgroundImageTag
        key={testimonial.id()}
        className="image"
        style={{
          background: { image: authorImage },
        }}
      />
    );
  });

  return {
    autoplay: true,
    dots: true,
    infinite: true,
    speed: 500,
    dotsClass: "testimonial-slider-widget--quote-portrait-wrapper",
    customPaging: (i) => (
      <button
        aria-label={`Show testimonial of ${testimonials[i].get("author")}`}
      >
        {testimonialAuthorImages[i]}
      </button>
    ),
  };
}

// Source: https://unsplash.com/photos/K2u71wv2eI4/
const fallbackImageUrl =
  "https://long-lasting-assets.scrivitojs.com/scrivito_example_app_js/" +
  "testimonial_slider_widget_fallback_author.jpeg";

const AddTestimonial = ({ widget }) => {
  if (!Scrivito.isInPlaceEditingActive()) return null;

  return (
    <div className="text-center">
      <a
        href="#"
        style={placeholderCss}
        className="edit-mode-link"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          const newTestimonials = [
            ...widget.get("testimonials"),
            new TestimonialWidget({}),
          ];
          widget.update({ testimonials: newTestimonials });
        }}
      >
        Click to add a testimonial
      </a>
    </div>
  );
};
/* eslint-enable jsx-a11y/anchor-is-valid */
