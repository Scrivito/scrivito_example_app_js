import * as Scrivito from "scrivito";

export const LinkContainerWidget = Scrivito.provideWidgetClass(
  "LinkContainerWidget",
  {
    attributes: {
      headline: "string",
      links: ["widgetlist", { only: "LinkWidget" }],
    },
  }
);
