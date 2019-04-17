import * as Scrivito from "scrivito";
import boxWidgetIcon from "../../assets/images/box_widget.svg";

Scrivito.provideEditingConfig("AboutBoxWidget", {
  title: "Member",
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
    email: {
      title: "Email Address",
      description: "Member email.",
    },
  },
  properties: ["image", "position", "name", "email"],
  initialContent: {
    position: "Position",
    name: "John Smith",
  },
});
