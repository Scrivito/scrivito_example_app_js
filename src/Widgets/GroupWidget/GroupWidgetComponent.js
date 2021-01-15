import * as React from "react";
import * as Scrivito from "scrivito";

Scrivito.provideComponent("GroupWidget", ({ widget }) => (
  <Scrivito.ContentTag content={widget} attribute="content" />
));
