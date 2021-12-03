import * as React from "react";
import * as Scrivito from "scrivito";

import "./FormContainerWidget.scss";

Scrivito.provideComponent("FormContainerWidget", ({ widget }) => (
  <Scrivito.ContentTag
    className="form-container-widget"
    content={widget}
    attribute="headline"
  />
));
