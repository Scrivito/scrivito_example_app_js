import * as Scrivito from "scrivito";

const EventOverviewWidget = Scrivito.provideWidgetClass("EventOverviewWidget", {
  attributes: {
    maxItems: "integer",
    showTags: "boolean",
    tags: "stringlist",
  },
});

export default EventOverviewWidget;
