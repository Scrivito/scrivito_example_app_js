import * as Scrivito from "scrivito";

export const ThumbnailGalleryImageWidget = Scrivito.provideWidgetClass(
  "ThumbnailGalleryImageWidget",
  {
    onlyInside: "ThumbnailGalleryWidget",
    attributes: {
      image: ["reference", { only: ["Image"] }],
      title: "string",
      subtitle: "string",
      tags: "stringlist",
    },
  }
);
