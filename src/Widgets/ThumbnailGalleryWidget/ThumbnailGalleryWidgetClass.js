import * as Scrivito from "scrivito";

const ThumbnailGalleryWidget = Scrivito.provideWidgetClass(
  "ThumbnailGalleryWidget",
  {
    attributes: {
      images: ["widgetlist", { only: "ThumbnailGalleryImageWidget" }],
      showTags: "boolean",
    },
  }
);

export default ThumbnailGalleryWidget;
