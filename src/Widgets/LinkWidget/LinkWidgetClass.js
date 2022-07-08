import * as Scrivito from "scrivito";

export const LinkWidget = Scrivito.provideWidgetClass("LinkWidget", {
  onlyInside: "LinkContainerWidget",
  attributes: {
    link: "link",
  },
});
