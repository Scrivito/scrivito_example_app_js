import * as Scrivito from "scrivito";
import { ENABLE_NEOLETTER_FORM_BUILDER } from "../../App";

export const FormButtonWidget =
  ENABLE_NEOLETTER_FORM_BUILDER &&
  Scrivito.provideWidgetClass("FormButtonWidget", {
    attributes: {
      buttonText: "string",
      alignment: ["enum", { values: ["left", "center", "right", "block"] }],
    },
    extractTextAttributes: ["buttonText"],
  });
