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
  titleForContent: widget => {
    const title = widget.get("title");
    const subtitle = widget.get("subtitle");

    if (title && subtitle) {
      return `Thumbnail Gallery Image: ${title} - ${subtitle}`;
    }
    if (title || subtitle) {
      return `Thumbnail Gallery Image: ${title || subtitle}`;
    }
  },
  validations: [
    [
      "image",

      image => {
        if (!image) {
          return { message: "The image should be set.", severity: "warning" };
        }
      },
    ],
  ],
});
