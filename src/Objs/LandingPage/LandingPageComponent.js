import * as React from "react";
import * as Scrivito from "scrivito";

Scrivito.provideComponent("LandingPage", ({ page }) => (
  <Scrivito.ContentTag tag="div" content={page} attribute="body" />
));
