import * as Scrivito from "scrivito";

const JobOverviewWidget = Scrivito.provideWidgetClass("JobOverviewWidget", {
  attributes: {
    locationLocality: "string",
  },
});

export default JobOverviewWidget;
