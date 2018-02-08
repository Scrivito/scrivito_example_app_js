import * as React from 'react';
import * as Scrivito from 'scrivito';
import Carousel from 'react-bootstrap/lib/Carousel';
import InPlaceEditingPlaceholder from '../../Components/InPlaceEditingPlaceholder';

Scrivito.provideComponent('CarouselWidget', ({ widget }) => {
  const images = widget.get('images');

  if (!images.length) {
    return (
      <InPlaceEditingPlaceholder center={ true }>
        Select images in the widget properties.
      </InPlaceEditingPlaceholder>
    );
  }

  return (
    <div>
      <Carousel
        indicators={ false }
        className="carousel-images"
        prevIcon={ <span className="fa fa-arrow-left" aria-hidden="true" /> }
        nextIcon={ <span className="fa fa-arrow-right" aria-hidden="true" /> }
      >
        {
          images.map((image, index) => {
            return (
              <Carousel.Item key={ `${image.id()}${index}` }>
                <Scrivito.ImageTag content={ image } alt={ image.get('alternativeText') } />
              </Carousel.Item>
            );
          })
        }
      </Carousel>
      <DescriptionBox widget={ widget } />
    </div>
  );
});

function DescriptionBox({ widget }) {
  if (widget.get('showDescription') !== 'yes') {
    return null;
  }

  return (
    <div className="container">
      <div className="client-wrapper">
        <div className="client-logo">
          <Scrivito.ImageTag content={ widget } attribute="descriptionLogo" alt="Logo" />
        </div>
        <div className="client-text">
          <Scrivito.ContentTag content={ widget } attribute="description" />
        </div>
      </div>
    </div>
  );
}
