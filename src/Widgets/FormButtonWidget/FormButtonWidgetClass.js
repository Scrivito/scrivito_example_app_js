import * as Scrivito from "scrivito";

export const FormButtonWidget =
  process.env.ENABLE_NEOLETTER_FORM_BUILDER &&
  Scrivito.provideWidgetClass("FormButtonWidget", {
    attributes: {
      buttonText: "string",
      alignment: ["enum", { values: ["left", "center", "right", "block"] }],
    },
    extractTextAttributes: ["buttonText"],
  });
