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
  validations: [
    [
      "items",

      items => {
        if (items.length <= 1) {
          return {
            message: "The ticklist must include at least one item.",
            severity: "error",
          };
        }
      },
    ],
  ],
});
