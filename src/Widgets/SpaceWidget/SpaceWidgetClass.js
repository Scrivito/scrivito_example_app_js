import * as Scrivito from "scrivito";

const SpaceWidget = Scrivito.provideWidgetClass("SpaceWidget", {
  attributes: {
    size: [
      "enum",
      {
        values: ["xs", "s", "m", "l", "xl", "xxl"],
      },
    ],
  },
});

export default SpaceWidget;
