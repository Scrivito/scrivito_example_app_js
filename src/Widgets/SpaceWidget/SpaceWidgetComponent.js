import * as React from "react";
import * as Scrivito from "scrivito";

Scrivito.provideComponent("SpaceWidget", ({ widget }) => {
  const size = widget.get("size") || 1;
  return <div style={{height: `${size}em`}} />;
});
