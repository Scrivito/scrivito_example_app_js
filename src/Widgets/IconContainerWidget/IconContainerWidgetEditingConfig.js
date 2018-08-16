import * as Scrivito from "scrivito";
import iconContainerWidgetIcon from "../../assets/images/icon_container_widget.svg";
import IconWidget from "../IconWidget/IconWidgetClass";

Scrivito.provideEditingConfig("IconContainerWidget", {
  title: "Icon List",
  thumbnail: iconContainerWidgetIcon,
  attributes: {
    iconList: {
      title: "Icon list",
    },
  },
  properties: ["iconList"],
  initialContent: {
    iconList: [
      new IconWidget({ icon: "fa-check-square-o" }),
      new IconWidget({ icon: "fa-check-square-o" }),
      new IconWidget({ icon: "fa-check-square-o" }),
    ],
  },
});
