import * as React from "react";
import * as Scrivito from "scrivito";

import "./DividerWidget.scss";

Scrivito.provideComponent("DividerWidget", ({ widget }) => {
  const showLogo = widget.get("showLogo") !== "no";
  const root = Scrivito.Obj.root();

  if (showLogo && root) {
    return (
      <div className="divider-widget">
        <Scrivito.ImageTag content={root.get("dividerLogo")} />
      </div>
    );
  }

  return <div className="divider-widget" />;
});
