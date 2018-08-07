import * as Scrivito from "scrivito";
import thumbnailGalleryWidgetIcon from "../../assets/images/thumbnail_gallery_widget.svg";

Scrivito.provideEditingConfig("ThumbnailGalleryWidget", {
  title: "Thumbnail Gallery",
  thumbnail: thumbnailGalleryWidgetIcon,
  attributes: {
    images: {
      title: "Images",
    },
    showTags: {
      title: "Show list of tags?",
      description: "Default: No",
      values: [{ value: "yes", title: "Yes" }, { value: "no", title: "No" }],
    },
  },
  properties: ["images", "showTags"],
});
