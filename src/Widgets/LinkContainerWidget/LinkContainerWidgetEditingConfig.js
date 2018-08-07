import * as Scrivito from "scrivito";
import linkListWidgetIcon from "../../assets/images/link_list_widget.svg";
import LinkWidget from "../LinkWidget/LinkWidgetClass";

Scrivito.provideEditingConfig("LinkContainerWidget", {
  title: "Link List",
  thumbnail: linkListWidgetIcon,
  attributes: {
    headline: {
      title: "Headline",
      description: "Leave empty to not show a headline.",
    },
  },
  properties: ["headline"],
  initialContent: {
    headline: "Links headline",
    links: ["Link 1", "Link 2", "Link 3"].map(
      title =>
        new LinkWidget({
          link: new Scrivito.Link({
            title,
            url: "https://scrivito.com",
            target: "_blank",
          }),
        })
    ),
  },
});
