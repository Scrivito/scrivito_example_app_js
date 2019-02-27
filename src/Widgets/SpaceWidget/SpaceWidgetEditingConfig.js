import * as Scrivito from "scrivito";
import spaceWidgetIcon from "../../assets/images/space_widget.svg";

Scrivito.provideEditingConfig("SpaceWidget", {
  title: "Space",
  thumbnail: spaceWidgetIcon,
  attributes: {
    size: {
      title: "Choose size",
    },
  },
  properties: ["size"],
  initialContent: {
    size: 5,
  },
});
