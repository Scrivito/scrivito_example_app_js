import * as Scrivito from 'scrivito';
import InPlaceEditingPlaceholder from 'Components/InPlaceEditingPlaceholder';
import Slider from 'react-slick';

function GalleryWidgetComponent({ widget }) {
  const images = widget.get('images');

  if (!images.length) {
    return (
      <InPlaceEditingPlaceholder center={ true }>
        Select images in the widget properties.
      </InPlaceEditingPlaceholder>
    );
  }

  const settings = sliderSettings(images);
  return (
    <div className="slick-gallary-fluid">
      <Slider { ...settings } className="slickslide">
        {
          images.map((image, index) =>
            <Scrivito.ImageTag
              content={ image }
              key={ `${image.id()}${index}` }
              alt={ image.get('alternativeText') }
            />)
        }
      </Slider>
    </div>
  );
}

Scrivito.provideComponent('GalleryWidget', GalleryWidgetComponent);

function sliderSettings(images) {
  return {
    arrows: false,
    autoplay: true,
    autoplaySpeed: 7000,
    centerMode: true,
    centerPadding: '0px',
    cssEase: 'linear',
    dots: true,
    fade: true,
    infinite: true,
    slide: 'li',
    slidesToShow: 1,
    speed: 500,
    variableWidth: false,
    responsive: [{
      breakpoint: 800,
      settings: {
        centerMode: false,
      },
    }],
    customPaging: i => {
      const image = images[i];

      return (
        <button className="tab">
          <Scrivito.BackgroundImageTag
            className="image"
            style={
              {
                background: { image },
              }
            }
          />
        </button>
      );
    },
  };
}
