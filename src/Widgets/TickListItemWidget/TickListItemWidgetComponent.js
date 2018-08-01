import * as React from "react";
import * as Scrivito from "scrivito";

Scrivito.provideComponent("TickListItemWidget", ({ widget }) => (
  <Scrivito.WidgetTag tag="li">
    <Scrivito.ContentTag content={widget} attribute="statement" />
  </Scrivito.WidgetTag>
));
