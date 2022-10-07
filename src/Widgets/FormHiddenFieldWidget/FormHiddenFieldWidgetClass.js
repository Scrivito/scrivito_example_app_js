import * as Scrivito from "scrivito";
import { ENABLE_NEOLETTER_FORM_BUILDER } from "../../App";

export const FormHiddenFieldWidget =
  ENABLE_NEOLETTER_FORM_BUILDER &&
  Scrivito.provideWidgetClass("FormHiddenFieldWidget", {
    onlyInside: "FormContainerWidget",
    attributes: {
      customFieldName: "string",
      hiddenValue: "string",
    },
  });
