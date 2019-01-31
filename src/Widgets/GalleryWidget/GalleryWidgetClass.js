import * as Scrivito from "scrivito";

const GalleryWidget = Scrivito.provideWidgetClass("GalleryWidget", {
  attributes: {
    images: ["referencelist", { only: ["Image"] }],
  },
});

export default GalleryWidget;
