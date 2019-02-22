import * as React from "react";
import * as Scrivito from "scrivito";

Scrivito.provideComponent("SpaceWidget", ({ widget }) => {
  const size = widget.get("size") || "m";
  return <hr className={`scrivito-space-widget ${size}`} />;
});
