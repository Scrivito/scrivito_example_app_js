import * as Scrivito from "scrivito";

const ThumbnailGalleryImageWidget = Scrivito.provideWidgetClass(
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

export default ThumbnailGalleryImageWidget;
