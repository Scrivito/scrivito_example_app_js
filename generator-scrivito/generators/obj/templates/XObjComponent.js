import * as React from "react";
import * as Scrivito from "scrivito";

Scrivito.provideComponent("<%= nameUpper %>", ({ page }) => (
  <Scrivito.ContentTag tag="div" content={page} attribute="body" />
));
