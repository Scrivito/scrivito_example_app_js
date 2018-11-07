import * as React from "react";
import * as Scrivito from "scrivito";
import Lightbox from "react-images";
import fullScreenWidthPixels from "../../utils/fullScreenWidthPixels";
import InPlaceEditingPlaceholder from "../../Components/InPlaceEditingPlaceholder";
import TagList from "../../Components/TagList";
import isImage from "../../utils/isImage";

class ThumbnailGalleryComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImage: 0,
      lightboxIsOpen: false,
      currentTag: "",
    };

    this.openLightbox = this.openLightbox.bind(this);
    this.closeLightbox = this.closeLightbox.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoImage = this.gotoImage.bind(this);
    this.setTag = this.setTag.bind(this);
  }

  openLightbox(index, event) {
    event.preventDefault();
    this.setState({
      currentImage: index,
      lightboxIsOpen: true,
    });
  }

  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    });
  }

  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1,
    });
  }

  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1,
    });
  }

  gotoImage(index) {
    this.setState({
      currentImage: index,
    });
  }

  setTag(tag) {
    this.setState({
      currentTag: tag,
    });
  }

  render() {
    const widget = this.props.widget;
    const images = widget
      .get("images")
      .filter(subWidget => isImage(subWidget.get("image")));
    const lightboxImages = images.map(image => lightboxOptions(image));

    if (!images.length) {
      return (
        <InPlaceEditingPlaceholder center>
          Select images in the widget properties.
        </InPlaceEditingPlaceholder>
      );
    }

    return (
      <div>
        <TagList
          showTags={widget.get("showTags") === "yes"}
          tags={allTags(images)}
          currentTag={this.state.currentTag}
          setTag={this.setTag}
        />
        <div>
          <div className="row gallery-box-wrapper">
            {images.map((image, imageIndex) => (
              <Thumbnail
                key={image.id()}
                widget={image}
                openLightbox={event => this.openLightbox(imageIndex, event)}
                currentTag={this.state.currentTag}
              />
            ))}
          </div>
          <Lightbox
            images={lightboxImages}
            currentImage={this.state.currentImage}
            isOpen={this.state.lightboxIsOpen}
            onClickImage={this.handleClickImage}
            onClickNext={this.gotoNext}
            onClickPrev={this.gotoPrevious}
            onClickThumbnail={this.gotoImage}
            onClose={this.closeLightbox}
            showThumbnails
            backdropClosesModal
          />
        </div>
      </div>
    );
  }
}

Scrivito.provideComponent("ThumbnailGalleryWidget", ThumbnailGalleryComponent);

const Thumbnail = Scrivito.connect(({ widget, openLightbox, currentTag }) => {
  const title = widget.get("title");
  const subtitle = widget.get("subtitle");
  const image = widget.get("image");
  const tags = widget.get("tags");

  const classNames = [
    "col-md-3",
    "col-sm-4",
    "col-6",
    "gallery-box",
    "gutter0",
  ];
  if (currentTag && tags.includes(currentTag)) {
    classNames.push("squeezed");
  }

  return (
    <div className={classNames.join(" ")}>
      <Scrivito.BackgroundImageTag
        className="gallery-box-image"
        style={{ background: { image } }}
      />
      <a
        href="#"
        className="gallery-box-content-wrapper"
        onClick={openLightbox}
      >
        <span className="gallery-box-content">
          <i className="fa fa-camera" aria-hidden="true" />
          <span className="title">{title}</span>
          <span className="subtitle">{subtitle}</span>
        </span>
      </a>
    </div>
  );
});

function allTags(images) {
  const tagsArray = images.map(image => image.get("tags"));

  // flatten tags
  const tags = tagsArray.reduce((a, b) => a.concat(b), []);

  // unique tags
  const uniqueTags = [...new Set(tags)];

  // sort tags
  return uniqueTags.sort();
}

function lightboxOptions(galleryImageWidget) {
  const image = galleryImageWidget.get("image");
  const binary = image.get("blob");
  const srcUrl = binary.optimizeFor({ width: fullScreenWidthPixels() }).url();
  const alt = image.get("alternativeText");

  return {
    src: srcUrl,
    thumbnail: srcUrl,
    caption: [
      galleryImageWidget.get("title"),
      galleryImageWidget.get("subtitle"),
    ].join(" - "),
    alt,
  };
}
