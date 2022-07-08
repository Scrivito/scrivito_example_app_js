import * as Scrivito from "scrivito";

export const GalleryWidget = Scrivito.provideWidgetClass("GalleryWidget", {
  attributes: {
    images: ["referencelist", { only: ["Image"] }],
  },
});
