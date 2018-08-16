import * as React from "react";
import * as Scrivito from "scrivito";
import Slider from "react-slick";
import placeholderCss from "../../utils/placeholderCss";
import TestimonialWidget from "../TestimonialWidget/TestimonialWidgetClass";
import isImage from "../../utils/isImage";

Scrivito.provideComponent("TestimonialSliderWidget", ({ widget }) => {
  const testimonials = widget.get("testimonials");
  const settings = sliderSettings(testimonials);

  return (
    <React.Fragment>
      <Slider {...settings}>
        {testimonials.map(testimonial => (
          <div key={testimonial.id()}>
            <h1 className="quote-headline text-center">&quot;</h1>
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
    </React.Fragment>
  );
});

function sliderSettings(testimonials) {
  const testimonialAuthorImages = testimonials.map(testimonial => {
    const authorImage = testimonial.get("authorImage");
    if (!isImage(authorImage)) {
      return <img className="image" src={fallbackImageUrl} />;
    }

    return (
      <Scrivito.BackgroundImageTag
        key={testimonial.id}
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
    dotsClass: "quote-portrait-wrapper",
    customPaging: i => {
      const image = testimonialAuthorImages[i];
      return <a>{image}</a>;
    },
  };
}

// Source: https://unsplash.com/photos/K2u71wv2eI4/
const fallbackImageUrl =
  "https://images.unsplash.com/photo-1481437642641-2f0ae875f836" +
  "?dpr=1&auto=compress,format&fit=crop&w=200&h=200&q=80&cs=tinysrgb&crop=&bg=";

const AddTestimonial = ({ widget }) => {
  if (!Scrivito.isInPlaceEditingActive()) {
    return null;
  }

  return (
    <div className="text-center">
      <a
        href="#"
        style={placeholderCss}
        className="edit-mode-link"
        onClick={e => {
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
