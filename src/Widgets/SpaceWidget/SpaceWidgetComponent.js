import * as React from "react";
import * as Scrivito from "scrivito";

Scrivito.provideComponent("SpaceWidget", ({ widget }) => {
  const size = widget.get("size") || 5;
  return <div style={{height: `${size}em`}} />;
});
