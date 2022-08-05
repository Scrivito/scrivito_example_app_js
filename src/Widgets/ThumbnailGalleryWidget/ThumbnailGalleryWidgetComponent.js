import * as React from "react";
import * as Scrivito from "scrivito";
import Slider from "react-slick";
import loadable from "@loadable/component";

import { InPlaceEditingPlaceholder } from "../../Components/InPlaceEditingPlaceholder";
import { TagList } from "../../Components/TagList";
import { isImage } from "../../utils/isImage";
import "./ThumbnailGalleryWidget.scss";

const Modal = loadable(() => import("react-bootstrap/Modal"));

Scrivito.provideComponent("ThumbnailGalleryWidget", ({ widget }) => {
  const [currentImage, setCurrentImage] = React.useState(0);
  const [lightboxIsOpen, setLightboxIsOpen] = React.useState(false);
  const [currentTag, setCurrentTag] = React.useState("");

  const images = widget
    .get("images")
    .filter((subWidget) => isImage(subWidget.get("image")));

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
        <Modal
          show={lightboxIsOpen}
          onHide={closeLightbox}
          centered
          size="xl"
          restoreFocus={false}
          className="thumbnail-gallery-widget--modal"
          // TODO: Add zindex={1000000} // same value as .cookie-box
        >
          <button
            type="button"
            className="slick-slide-close-button"
            aria-label="Close"
            onClick={closeLightbox}
          >
            <svg
              viewBox="0 0 24 24"
              role="img"
              focusable="false"
              style={{
                height: "2em",
                width: "2em",
                display: "block",
                fill: "rgb(255, 255, 255)"
              }}
            >
              <path
                d="m23.25 24c-.19 0-.38-.07-.53-.22l-10.72-10.72-10.72 10.72c-.29.29-.77.29-1.06 0s-.29-.77 0-1.06l10.72-10.72-10.72-10.72c-.29-.29-.29-.77 0-1.06s.77-.29 1.06 0l10.72 10.72 10.72-10.72c.29-.29.77-.29 1.06 0s .29.77 0 1.06l-10.72 10.72 10.72 10.72c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22"
                fillRule="evenodd"
              />
            </svg>
          </button>
          <Slider
            dots
            dotsClass="slick-dots slick-thumb"
            infinite
            speed={500}
            initialSlide={currentImage}
            customPaging={(i) => (
              <button
                aria-label={`Show ${[
                  images[i].get("title"),
                  images[i].get("subtitle"),
                ].join(" - ")}`}
              >
                <Scrivito.BackgroundImageTag
                  className="image"
                  style={{ background: { image: images[i].get("image") } }}
                />
              </button>
            )}
          >
            {images.map((image) => (
              <div className="image-wrapper" key={image.id()}>
                <Scrivito.ImageTag
                  content={image}
                  attribute="image"
                  alt={image.get("alternativeText")}
                />
                <h3 className="photo-caption">
                  {[image.get("title"), image.get("subtitle")].join(" - ")}
                </h3>
              </div>
            ))}
          </Slider>
        </Modal>
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
