import * as Scrivito from "scrivito";
import blogOverviewWidgetIcon from "../../assets/images/blog_overview_widget.svg";

Scrivito.provideEditingConfig("BlogOverviewWidget", {
  title: "Blog Overview",
  thumbnail: blogOverviewWidgetIcon,
  attributes: {
    maxItems: {
      title: "Maximum number of blog posts",
      description: "Set to 0 to show all blog posts.",
    },
    author: {
      title: "Filter by author",
      description: "Leave empty to not filter by author.",
    },
    tags: {
      title: "Filter by tags",
      description:
        "Only show blog posts, that have one of the given tags." +
        " Leave empty to not filter by tags.",
    },
  },
  properties: ["maxItems", "author", "tags"],
});
