import * as React from "react";
import * as Scrivito from "scrivito";
import * as speakingUrl from "speakingurl";
import { alignmentClassName } from "../../utils/alignmentClassName";

Scrivito.provideComponent("HeadlineWidget", ({ widget }) => {
  const style = widget.get("style") || "h2";
  const level = widget.get("level") || style;
  const classNames = [style];

  const alignment = alignmentClassName(widget.get("alignment"));
  if (alignment) classNames.push(alignment);

  if (widget.get("showDividingLine")) classNames.push("b-bottom");
  if (!widget.get("showMargin")) classNames.push("no-margin");

  return (
    <Scrivito.ContentTag
      tag={level}
      content={widget}
      attribute="headline"
      className={classNames.join(" ")}
      id={speakingUrl(widget.get("headline"))}
    />
  );
});
