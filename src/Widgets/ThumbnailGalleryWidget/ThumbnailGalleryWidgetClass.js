import * as Scrivito from "scrivito";

const ThumbnailGalleryWidget = Scrivito.provideWidgetClass(
  "ThumbnailGalleryWidget",
  {
    attributes: {
      images: ["widgetlist", { only: "ThumbnailGalleryImageWidget" }],
      showTags: ["enum", { values: ["yes", "no"] }],
    },
  }
);

export default ThumbnailGalleryWidget;
