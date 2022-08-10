import * as React from "react";
import * as Scrivito from "scrivito";
import Carousel from "react-bootstrap/Carousel";

import { InPlaceEditingPlaceholder } from "../../Components/InPlaceEditingPlaceholder";
import "./CarouselWidget.scss";

Scrivito.provideComponent("CarouselWidget", ({ widget }) => {
  const images = widget.get("images");

  if (!images.length) {
    return (
      <InPlaceEditingPlaceholder center>
        Select images in the widget properties.
      </InPlaceEditingPlaceholder>
    );
  }

  return (
    <div className="carousel-widget">
      <Carousel className="carousel-images">
        {images.map((image, index) => (
          <Carousel.Item key={`${image.id()}-${index}`}>
            <Scrivito.ImageTag
              content={image}
              alt={image.get("alternativeText")}
            />
          </Carousel.Item>
        ))}
      </Carousel>
      <DescriptionBox widget={widget} />
    </div>
  );
});

const DescriptionBox = Scrivito.connect(({ widget }) => {
  if (!widget.get("showDescription")) return null;

  return (
    <div className="container">
      <div className="description-box">
        <div className="description-box--logo">
          <Scrivito.ImageTag
            content={widget}
            attribute="descriptionLogo"
            alt="Logo"
          />
        </div>
        <div className="description-box--text">
          <Scrivito.ContentTag content={widget} attribute="description" />
        </div>
      </div>
    </div>
  );
});
