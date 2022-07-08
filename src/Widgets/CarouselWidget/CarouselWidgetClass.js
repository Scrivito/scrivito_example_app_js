import * as Scrivito from "scrivito";

export const CarouselWidget = Scrivito.provideWidgetClass("CarouselWidget", {
  attributes: {
    images: ["referencelist", { only: ["Image"] }],
    showDescription: "boolean",
    descriptionLogo: ["reference", { only: ["Image"] }],
    description: "widgetlist",
  },
  extractTextAttributes: ["description"],
});
