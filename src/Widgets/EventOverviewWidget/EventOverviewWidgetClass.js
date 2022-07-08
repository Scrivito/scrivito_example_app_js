import * as Scrivito from "scrivito";

export const EventOverviewWidget = Scrivito.provideWidgetClass(
  "EventOverviewWidget",
  {
    attributes: {
      maxItems: "integer",
      showTags: "boolean",
      tags: "stringlist",
    },
  }
);
