import * as React from "react";
import * as Scrivito from "scrivito";

Scrivito.provideComponent("Homepage", ({ page }) => (
  <Scrivito.ContentTag tag="div" content={page} attribute="body" />
));
