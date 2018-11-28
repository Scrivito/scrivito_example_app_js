import * as React from "react";
import * as Scrivito from "scrivito";
import Slider from "react-slick";
import InPlaceEditingPlaceholder from "../../Components/InPlaceEditingPlaceholder";

Scrivito.provideComponent("GalleryWidget", ({ widget }) => {
  const images = widget.get("images");

  if (!images.length) {
    return (
      <InPlaceEditingPlaceholder center>
        Select images in the widget properties.
      </InPlaceEditingPlaceholder>
    );
  }

  const settings = sliderSettings(images);
  return (
    <div className="slick-gallary-fluid">
      <Slider {...settings} className="slickslide">
        {images.map((image, index) => (
          <Scrivito.ImageTag
            content={image}
            key={`${image.id()}${index}`}
            alt={image.get("alternativeText")}
          />
        ))}
      </Slider>
    </div>
  );
});

function sliderSettings(images) {
  return {
    arrows: false,
    autoplay: true,
    autoplaySpeed: 7000,
    centerMode: true,
    centerPadding: "0px",
    cssEase: "linear",
    dots: true,
    // fade: true does not play well with prerendering. See [1] for details
    // [1] https://github.com/akiran/react-slick/issues/1343
    fade: false,
    infinite: true,
    slide: "li",
    slidesToShow: 1,
    speed: 500,
    variableWidth: false,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          centerMode: false,
        },
      },
    ],
    customPaging: i => {
      const image = images[i];

      return (
        <button className="tab">
          <Scrivito.BackgroundImageTag
            className="image"
            style={{
              background: { image },
            }}
          />
        </button>
      );
    },
  };
}
