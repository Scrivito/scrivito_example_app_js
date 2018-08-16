import * as Scrivito from "scrivito";
import jobOverviewWidgetIcon from "../../assets/images/job_overview_widget.svg";

Scrivito.provideEditingConfig("JobOverviewWidget", {
  title: "Job Overview",
  thumbnail: jobOverviewWidgetIcon,
  attributes: {
    locationLocality: {
      title: "Filter by locality",
      description: "Leave empty to see all jobs. E.g. New York",
    },
  },
  properties: ["locationLocality"],
});
