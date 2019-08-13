import * as React from "react";
import * as Scrivito from "scrivito";

import "./PriceWidget.scss";

Scrivito.provideComponent("PriceWidget", ({ widget }) => (
  <div className="price-widget">
    <Scrivito.ContentTag
      className="price-widget--dollar"
      tag="span"
      content={widget}
      attribute="currency"
    />
    <Scrivito.ContentTag
      className="price-widget--price"
      tag="span"
      content={widget}
      attribute="price"
    />
    <Scrivito.ContentTag
      className="price-widget--period"
      tag="span"
      content={widget}
      attribute="period"
    />
  </div>
));
