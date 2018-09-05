import * as React from "react";
import * as Scrivito from "scrivito";
import ReactstrapCarousel from "reactstrap/lib/Carousel";
import ReactstrapCarouselControl from "reactstrap/lib/CarouselControl";
import ReactstrapCarouselItem from "reactstrap/lib/CarouselItem";
import InPlaceEditingPlaceholder from "../../Components/InPlaceEditingPlaceholder";

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
    <div>
      <Carousel images={images} />
      <DescriptionBox widget={widget} />
    </div>
  );
});

class BaseCarousel extends React.Component {
  constructor(props) {
    super(props);

    this.state = { activeIndex: 0 };

    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  next() {
    if (this.animating) {
      return;
    }

    const nextIndex = (this.state.activeIndex + 1) % this.props.images.length;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) {
      return;
    }

    let previousIndex = (this.state.activeIndex - 1) % this.props.images.length;
    if (previousIndex < 0) {
      previousIndex = this.props.images.length - 1;
    }
    this.setState({ activeIndex: previousIndex });
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  render() {
    const { images } = this.props;

    return (
      <ReactstrapCarousel
        activeIndex={this.state.activeIndex}
        next={this.next}
        previous={this.previous}
        className="carousel-images"
      >
        {images.map((image, index) => {
          return (
            <ReactstrapCarouselItem
              onExiting={this.onExiting}
              onExited={this.onExited}
              key={`${image.id()}${index}`}
            >
              <Scrivito.ImageTag
                content={image}
                alt={image.get("alternativeText")}
              />
            </ReactstrapCarouselItem>
          );
        })}
        <ReactstrapCarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={this.previous}
        />
        <ReactstrapCarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={this.next}
        />
      </ReactstrapCarousel>
    );
  }
}

const Carousel = Scrivito.connect(BaseCarousel);

const DescriptionBox = Scrivito.connect(({ widget }) => {
  if (widget.get("showDescription") !== "yes") {
    return null;
  }

  return (
    <div className="container">
      <div className="client-wrapper">
        <div className="client-logo">
          <Scrivito.ImageTag
            content={widget}
            attribute="descriptionLogo"
            alt="Logo"
          />
        </div>
        <div className="client-text">
          <Scrivito.ContentTag content={widget} attribute="description" />
        </div>
      </div>
    </div>
  );
});
