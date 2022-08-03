import * as React from "react";
import * as Scrivito from "scrivito";
import loadable from "@loadable/component";

import { fullScreenWidthPixels } from "../../utils/fullScreenWidthPixels";
import { InPlaceEditingPlaceholder } from "../../Components/InPlaceEditingPlaceholder";
import { TagList } from "../../Components/TagList";
import { isImage } from "../../utils/isImage";
import "./ThumbnailGalleryWidget.scss";

const ReactBnbGallery = loadable(() => import("react-bnb-gallery"));

Scrivito.provideComponent("ThumbnailGalleryWidget", ({ widget }) => {
  const [currentImage, setCurrentImage] = React.useState(0);
  const [lightboxIsOpen, setLightboxIsOpen] = React.useState(false);
  const [currentTag, setCurrentTag] = React.useState("");

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
        showTags={widget.get("showTags")}
        tags={allTags(images)}
        currentTag={currentTag}
        setTag={setCurrentTag}
      />
      <div>
        <div className="row thumbnail-gallery-widget--wrapper">
          {images.map((image, imageIndex) => (
            <Thumbnail
              key={image.id()}
              widget={image}
              openLightbox={(event) => openLightbox(imageIndex, event)}
              currentTag={currentTag}
            />
          ))}
        </div>
        <ReactBnbGallery
          show={lightboxIsOpen}
          backgroundColor="rgba(22,22,22,.9)"
          zIndex={1000000} // same value as .cookie-box
          activePhotoIndex={currentImage}
          photos={lightboxImages}
          onClose={closeLightbox}
          wrap={false}
        />
      </div>
    </div>
  );

  function openLightbox(index, event) {
    event.preventDefault();

    setCurrentImage(index);
    setLightboxIsOpen(true);
  }

  function closeLightbox() {
    setCurrentImage(0);
    setLightboxIsOpen(false);
  }
});

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
  if (currentTag && !tags.includes(currentTag)) classNames.push("squeezed");

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
