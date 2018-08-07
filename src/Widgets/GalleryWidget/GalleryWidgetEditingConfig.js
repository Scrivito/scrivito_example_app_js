import * as Scrivito from "scrivito";
import galleryWidgetIcon from "../../assets/images/gallery_widget.svg";

Scrivito.provideEditingConfig("GalleryWidget", {
  title: "Gallery",
  thumbnail: galleryWidgetIcon,
  attributes: {
    images: {
      title: "Images",
    },
  },
  properties: ["images"],
});
