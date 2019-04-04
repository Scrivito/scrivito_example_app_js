import * as Scrivito from "scrivito";
import boxWidgetIcon from "../../assets/images/box_widget.svg";

Scrivito.provideEditingConfig("AboutBoxWidget", {
  title: "AboutBox",
  thumbnail: boxWidgetIcon,
  attributes: {
    image: {
      title: "Avatar",
      description: "Team member's profile photo",
    },
    position: {
      title: "Position",
      description: "Member position.",
    },
    name: {
      title: "Name",
      description: "Member name.",
    },
  },
  properties: ["image", "position", "name"],
  initialContent: {
    position: "Position",
    name: "John Smith",
  },
});
