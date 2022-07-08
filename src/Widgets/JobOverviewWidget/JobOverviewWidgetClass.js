import * as Scrivito from "scrivito";

export const JobOverviewWidget = Scrivito.provideWidgetClass(
  "JobOverviewWidget",
  {
    attributes: {
      locationLocality: "string",
    },
  }
);
