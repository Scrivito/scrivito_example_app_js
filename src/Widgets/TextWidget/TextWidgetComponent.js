import * as React from "react";
import * as Scrivito from "scrivito";
import { alignmentClassName } from "../../utils/alignmentClassName";

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
