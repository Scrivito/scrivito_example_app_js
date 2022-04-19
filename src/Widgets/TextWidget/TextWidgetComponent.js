import * as React from "react";
import * as Scrivito from "scrivito";

Scrivito.provideComponent("TextWidget", ({ widget }) => {
  const classNames = [alignmentClassName(widget.get("alignment"))];

  return (
    <Scrivito.ContentTag
      tag="div"
      className={classNames.join(" ")}
      content={widget}
      attribute="text"
    />
  );
});

function alignmentClassName(widgetAlignment) {
  if (widgetAlignment === "center") {
    return "text-center";
  }

  if (widgetAlignment === "right") {
    return "text-end";
  }

  return "";
}
