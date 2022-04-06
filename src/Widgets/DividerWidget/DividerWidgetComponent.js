import * as React from "react";
import * as Scrivito from "scrivito";

import "./DividerWidget.scss";

Scrivito.provideComponent("DividerWidget", ({ widget }) => {
  const root = Scrivito.Obj.root();

  if (widget.get("showLogo") && root) {
    return (
      <div className="divider-widget">
        <Scrivito.ImageTag content={root.get("dividerLogo")} alt="Logo" />
      </div>
    );
  }

  return <div className="divider-widget" />;
});
