import * as Scrivito from "scrivito";

export const CardWidget = Scrivito.provideWidgetClass("CardWidget", {
  attributes: {
    backgroundAnimateOnHover: "boolean",
    backgroundColor: [
      "enum",
      {
        values: [
          "white",
          "primary",
          "secondary",
          "light-grey",
          "middle-grey",
          "dark-grey",
          "transparent",
          "success",
          "info",
          "warning",
          "danger",
        ],
      },
    ],
    backgroundImage: ["reference", { only: ["Image"] }],
    cardBody: "widgetlist",
    cardExtended: "boolean",
    cardFooter: "widgetlist",
    image: ["reference", { only: ["Image"] }],
    linkTo: "link",
    padding: ["enum", { values: ["p-0", "p-1", "p-2", "p-3", "p-4", "p-5"] }],
    margin: [
      "enum",
      { values: ["mb-0", "mb-1", "mb-2", "mb-3", "mb-4", "mb-5"] },
    ],
    showFooter: "boolean",
  },
});
