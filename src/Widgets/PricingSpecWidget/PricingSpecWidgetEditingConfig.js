import * as Scrivito from "scrivito";

Scrivito.provideEditingConfig("PricingSpecWidget", {
  title: "Pricing Spec",
  validations: [
    [
      "unit",

      (unit, { widget }) => {
        const variable = widget.get("variable");

        if (variable.length === 0 && unit.length === 0) {
          return {
            message: "One, variable or unit, must be set.",
            severity: "error",
          };
        }
      },
    ],
  ],
});
