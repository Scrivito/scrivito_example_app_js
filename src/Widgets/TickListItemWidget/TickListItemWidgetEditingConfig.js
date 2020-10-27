import * as Scrivito from "scrivito";
import tickListItemWidgetIcon from "../../assets/images/tick_list_item_widget.svg";

Scrivito.provideEditingConfig("TickListItemWidget", {
  title: "Tick List Item",
  thumbnail: tickListItemWidgetIcon,
  initialContent: {
    statement: "Lorem ipsum",
  },
  validations: [
    [
      "statement",

      (statement) => {
        if (!statement) {
          return {
            message: "The statement should be set.",
            severity: "warning",
          };
        }
      },
    ],
  ],
});
