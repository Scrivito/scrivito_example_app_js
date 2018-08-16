import * as Scrivito from "scrivito";

const LinkContainerWidget = Scrivito.provideWidgetClass("LinkContainerWidget", {
  attributes: {
    headline: "string",
    links: ["widgetlist", { only: "LinkWidget" }],
  },
});

export default LinkContainerWidget;
