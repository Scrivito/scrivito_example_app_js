import * as React from "react";
import * as Scrivito from "scrivito";
import { kebabCase } from "lodash-es";
import "./HeadlineWidget.scss";

Scrivito.provideComponent("HeadlineWidget", ({ widget }) => {
  const style = widget.get("style") || "h2";
  const level = widget.get("level") || style;
  const classNames = ["headline-widget", style];
  if (widget.get("alignment")) {
    classNames.push(`text-${widget.get("alignment")}`);
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
