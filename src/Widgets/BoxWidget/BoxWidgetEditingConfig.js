import * as Scrivito from "scrivito";
import boxWidgetIcon from "../../assets/images/box_widget.svg";

Scrivito.provideEditingConfig("BoxWidget", {
  title: "Box",
  thumbnail: boxWidgetIcon,
  attributes: {
    boxStyle: {
      title: "Background color",
      description: "Default: Transparent",
      values: [
        { value: "transparent", title: "Transparent" },
        { value: "white", title: "White with border" },
      ],
    },
    useOffset: {
      title: "Use offset?",
      description: 'If so, the box will move "up". Default: No',
      values: [{ value: "yes", title: "Yes" }, { value: "no", title: "No" }],
    },
  },
  properties: ["boxStyle", "useOffset"],
  initialContent: {
    boxStyle: "transparent",
    useOffset: "no",
  },
});
