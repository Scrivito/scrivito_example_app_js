import * as React from "react";
import * as Scrivito from "scrivito";

Scrivito.provideComponent("PricingSpecWidget", ({ widget }) => (
  <div className="spec">
    <Scrivito.ContentTag
      content={widget}
      attribute="variable"
      className="variable"
      tag="span"
    />
    <Scrivito.ContentTag content={widget} attribute="unit" tag="span" />
  </div>
));
