import * as Scrivito from "scrivito";

export const IconContainerWidget = Scrivito.provideWidgetClass(
  "IconContainerWidget",
  {
    attributes: {
      iconList: ["widgetlist", { only: "IconWidget" }],
    },
  }
);
