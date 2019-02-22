import * as Scrivito from "scrivito";
import spaceWidgetIcon from "../../assets/images/space_widget.svg";

Scrivito.provideEditingConfig("SpaceWidget", {
  title: "Space",
  thumbnail: spaceWidgetIcon,
  attributes: {
    size: {
      title: "Choose size",
      values: [
        { value: "xs", title: "Extra small" },
        { value: "s", title: "Small" },
        { value: "m", title: "Medium" },
        { value: "l", title: "Large" },
        { value: "xl", title: "Extra large" },
        { value: "xxl", title: "Extra extra large" },
      ],
    },
  },
  properties: ["size"],
  initialContent: {
    size: "m",
  },
});
