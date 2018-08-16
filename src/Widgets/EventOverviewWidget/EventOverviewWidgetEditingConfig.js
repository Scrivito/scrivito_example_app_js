import * as Scrivito from "scrivito";
import eventOverviewWidgetIcon from "../../assets/images/event_overview_widget.svg";

Scrivito.provideEditingConfig("EventOverviewWidget", {
  title: "Event Overview",
  thumbnail: eventOverviewWidgetIcon,
  attributes: {
    maxItems: {
      title: "Maximum number of events",
      description: "Set to 0 to show all events.",
    },
    tags: {
      title: "Filter by tags",
      description:
        "Only show events, that have one of the given tags." +
        " Leave empty to not filter by tags.",
    },
    showTags: {
      title: "Show list of tags?",
      description: "Default: No",
      values: [{ value: "yes", title: "Yes" }, { value: "no", title: "No" }],
    },
  },
  properties: ["maxItems", "showTags", "tags"],
  initialContent: {
    maxItems: 0,
    showTags: "no",
  },
});
