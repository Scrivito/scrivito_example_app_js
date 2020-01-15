import * as Scrivito from "scrivito";
import carouselWidgetIcon from "../../assets/images/carousel_widget.svg";

Scrivito.provideEditingConfig("CarouselWidget", {
  title: "Carousel",
  thumbnail: carouselWidgetIcon,
  attributes: {
    images: {
      title: "Images",
    },
    showDescription: {
      title: "Show description?",
      description:
        "This allows to show an image and some text below this carousel. Default: No",
      values: [
        { value: "yes", title: "Yes" },
        { value: "no", title: "No" },
      ],
    },
  },
  properties: ["images", "showDescription"],
  initialContent: {
    showDescription: "no",
  },
  validations: [
    [
      "images",

      images => {
        if (images.length < 1) {
          return {
            message: "The carousel should contain at least one image.",
            severity: "warning",
          };
        }
      },
    ],
  ],
});
