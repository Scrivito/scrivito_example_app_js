import * as Scrivito from "scrivito";

export const ThumbnailGalleryWidget = Scrivito.provideWidgetClass(
  "ThumbnailGalleryWidget",
  {
    attributes: {
      images: ["widgetlist", { only: "ThumbnailGalleryImageWidget" }],
      showTags: "boolean",
    },
  }
);
