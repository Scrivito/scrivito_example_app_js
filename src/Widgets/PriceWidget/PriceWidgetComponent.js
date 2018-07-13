import * as React from "react";
import * as Scrivito from "scrivito";

Scrivito.provideComponent("PriceWidget", ({ widget }) => (
  <div className="quantity">
    <Scrivito.ContentTag
      className="dollar"
      tag="span"
      content={widget}
      attribute="currency"
    />
    <Scrivito.ContentTag
      className="price"
      tag="span"
      content={widget}
      attribute="price"
    />
    <Scrivito.ContentTag
      className="period"
      tag="span"
      content={widget}
      attribute="period"
    />
  </div>
));
