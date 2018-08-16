import * as Scrivito from "scrivito";

const LinkWidget = Scrivito.provideWidgetClass("LinkWidget", {
  onlyInside: "LinkContainerWidget",
  attributes: {
    link: "link",
  },
});

export default LinkWidget;
