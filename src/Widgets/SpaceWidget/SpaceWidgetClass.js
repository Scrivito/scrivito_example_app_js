import * as Scrivito from "scrivito";

const SpaceWidget = Scrivito.provideWidgetClass("SpaceWidget", {
  attributes: {
    size: [
      "enum",
      {
        values: [
          "free",
          "xs-small",
          "small",
          "medium",
          "large",
          "xl-large",
          "xxl-large",
        ],
      },
    ],
    freeSize: "string",
  },
});

export default SpaceWidget;
