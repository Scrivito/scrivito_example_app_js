import * as Scrivito from "scrivito";

Scrivito.provideEditingConfig("TickListItemWidget", {
  title: "Tick List Item",
  initialContent: {
    statement: "Lorem ipsum",
  },
  validations: [
    [
      "statement",

      statement => {
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
