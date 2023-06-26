import * as React from "react";
import * as Scrivito from "scrivito";
import { getFieldName } from "../FormContainerWidget/utils/getFieldName";

Scrivito.provideComponent("FormHiddenFieldWidget", ({ widget }) => {
  const name = getFieldName(widget);
  if (!name) return null;

  return <input type="hidden" name={name} value={widget.get("hiddenValue")} />;
});
