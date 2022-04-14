import * as React from "react";
import * as Scrivito from "scrivito";
import { kebabCase } from "lodash-es";
import "./HeadlineWidget.scss";

Scrivito.provideComponent("HeadlineWidget", ({ widget }) => {
  const style = widget.get("style") || "h2";
  const level = widget.get("level") || style;
  const classNames = ["headline-widget", style];

  const alignment = alignmentClassName(widget.get("alignment"));
  if (alignment) {
    classNames.push(alignment);
  }

  if (widget.get("showDividingLine")) {
    classNames.push("b-bottom");
  }
  if (!widget.get("showMargin")) {
    classNames.push("no-margin");
  }

  return (
    <>
      <span
        className="headline-widget--anchor"
        id={kebabCase(widget.get("headline"))}
      ></span>
      <Scrivito.ContentTag
        tag={level}
        content={widget}
        attribute="headline"
        className={classNames.join(" ")}
      />
    </>
  );
});

function alignmentClassName(widgetAlignment) {
  if (widgetAlignment === "left") {
    return "text-start";
  }

  if (widgetAlignment === "center") {
    return "text-center";
  }

  if (widgetAlignment === "right") {
    return "text-end";
  }

  return "";
}
