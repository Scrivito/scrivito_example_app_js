import * as Scrivito from "scrivito";
import timeBoxWidgetIcon from "../../assets/images/time_box_widget.svg";


Scrivito.provideEditingConfig("TimeBoxWidget", {
  title: "Time Box",
  thumbnail: timeBoxWidgetIcon,
  attributes: {
    displayFrom: {
      title: 'Valid from',
      description: "Date you want this content first displayed",
    },
    displayUntil: {
      title: 'Valid until',
      description: "Date you want to end displaying this content, omit to display 'forever'"
    },
  },
  properties: [
    "displayFrom",
    "displayUntil",
  ],
  initialContent: {
    displayFrom: new Date(),
  },
});
