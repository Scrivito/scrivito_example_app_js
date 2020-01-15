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
  validations: [
    [
      "images",

      images => {
        if (images.length < 1) {
          return {
            message: "The gallery should contain at least one image.",
            severity: "warning",
          };
        }
      },
    ],
  ],
});
