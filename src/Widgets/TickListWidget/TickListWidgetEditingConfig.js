import * as Scrivito from "scrivito";
import tickListWidgetIcon from "../../assets/images/tick_list_widget.svg";
import TickListItemWidget from "../TickListItemWidget/TickListItemWidgetClass";

Scrivito.provideEditingConfig("TickListWidget", {
  title: "Tick List",
  thumbnail: tickListWidgetIcon,
  initialContent: {
    items: [
      new TickListItemWidget({}),
      new TickListItemWidget({}),
      new TickListItemWidget({}),
    ],
  },
});
