import * as React from "react";
import * as Scrivito from "scrivito";
import { alignmentClassName } from "../../utils/alignmentClassName";

Scrivito.provideComponent("TextWidget", ({ widget }) => (
  <Scrivito.ContentTag
    tag="div"
    className={alignmentClassName(widget.get("alignment"))}
    content={widget}
    attribute="text"
  />
));
