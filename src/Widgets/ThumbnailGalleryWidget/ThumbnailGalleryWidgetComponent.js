import * as React from "react";
import * as Scrivito from "scrivito";
import loadable from "@loadable/component";

import fullScreenWidthPixels from "../../utils/fullScreenWidthPixels";
import InPlaceEditingPlaceholder from "../../Components/InPlaceEditingPlaceholder";
import TagList from "../../Components/TagList";
import isImage from "../../utils/isImage";
import "./ThumbnailGalleryWidget.scss";

const ReactBnbGallery = loadable(() => import("react-bnb-gallery"));

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

  setTag(tag) {
    this.setState({
      currentTag: tag,
    });
  }

  render() {
    const { widget } = this.props;
    const images = widget
      .get("images")
      .filter((subWidget) => isImage(subWidget.get("image")));
    const lightboxImages = images.map((image) => lightboxOptions(image));

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
          <div className="row thumbnail-gallery-widget--wrapper">
            {images.map((image, imageIndex) => (
              <Thumbnail
                key={image.id()}
                widget={image}
                openLightbox={(event) => this.openLightbox(imageIndex, event)}
                currentTag={this.state.currentTag}
              />
            ))}
          </div>
          <ReactBnbGallery
            show={this.state.lightboxIsOpen}
            backgroundColor="rgba(22,22,22,.9)"
            zIndex={1000000} // same value as .cookie-box
            activePhotoIndex={this.state.currentImage}
            photos={lightboxImages}
            onClose={this.closeLightbox}
            wrap={false}
          />
        </div>
      </div>
    );
  }
}

Scrivito.provideComponent("ThumbnailGalleryWidget", ThumbnailGalleryComponent);

/* eslint-disable jsx-a11y/anchor-is-valid */
const Thumbnail = Scrivito.connect(({ widget, openLightbox, currentTag }) => {
  const title = widget.get("title");
  const subtitle = widget.get("subtitle");
  const image = widget.get("image");
  const tags = widget.get("tags");

  const classNames = [
    "col-md-3",
    "col-sm-4",
    "col-6",
    "gutter0",
    "thumbnail-gallery-widget",
  ];
  if (currentTag && !tags.includes(currentTag)) {
    classNames.push("squeezed");
  }

  return (
    <div className={classNames.join(" ")}>
      <Scrivito.BackgroundImageTag
        className="thumbnail-gallery-widget--image"
        style={{ background: { image } }}
      />
      <a
        href="#"
        className="thumbnail-gallery-widget--content-wrapper"
        onClick={openLightbox}
      >
        <span className="thumbnail-gallery-widget--content">
          <i className="fa fa-camera" aria-hidden="true" />
          <span className="title">{title}</span>
          <span className="subtitle">{subtitle}</span>
        </span>
      </a>
    </div>
  );
});
/* eslint-enable jsx-a11y/anchor-is-valid */

function allTags(images) {
  const tagsArray = images.map((image) => image.get("tags"));

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
    photo: srcUrl,
    thumbnail: srcUrl,
    caption: [
      galleryImageWidget.get("title"),
      galleryImageWidget.get("subtitle"),
    ].join(" - "),
    alt,
  };
}
