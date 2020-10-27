import * as Scrivito from "scrivito";
import thumbnailGalleryImageWidgetIcon from "../../assets/images/thumbnail_gallery_image_widget.svg";

Scrivito.provideEditingConfig("ThumbnailGalleryImageWidget", {
  title: "Thumbnail Gallery Image",
  thumbnail: thumbnailGalleryImageWidgetIcon,
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
  titleForContent: (widget) => {
    const parts = [widget.get("title"), widget.get("subtitle")];
    const summary = parts.filter((e) => e).join(" - ");

    if (summary) {
      return `Thumbnail Gallery Image: ${summary}`;
    }
  },
});
