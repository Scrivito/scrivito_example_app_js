import * as Scrivito from "scrivito";

Scrivito.provideEditingConfig("ThumbnailGalleryImageWidget", {
  title: "Thumbnail Gallery Image",
  attributes: {
    image: {
      title: "Image",
    },
    title: {
      title: "Title",
    },
    subtitle: {
      title: "Subtitle",
    },
    tags: {
      title: "Tags",
    },
  },
  properties: ["image", "title", "subtitle", "tags"],
  titleForContent: widget =>
    `${widget.get("title")} - ${widget.get("subtitle")}`,
});
