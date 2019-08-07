import * as React from "react";
import * as Scrivito from "scrivito";

import "./tickListWidget.scss";

Scrivito.provideComponent("TickListWidget", ({ widget }) => (
  <Scrivito.ContentTag
    tag="ul"
    className="tick-list-widget"
    content={widget}
    attribute="items"
  />
));
