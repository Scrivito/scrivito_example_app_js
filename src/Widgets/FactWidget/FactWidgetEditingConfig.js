import * as Scrivito from "scrivito";
import factWidgetIcon from "../../assets/images/fact_widget.svg";

Scrivito.provideEditingConfig("FactWidget", {
  title: "Fact",
  thumbnail: factWidgetIcon,
  initialContent: {
    key: "Lorem ipsum",
    value: "12",
  },
  validations: [
    [
      "value",

      (value, { widget }) => {
        if (!widget.get("key") && !value) {
          return {
            message: "One, key or value, must be specified.",
            severity: "error",
          };
        }
      },
    ],
  ],
});
