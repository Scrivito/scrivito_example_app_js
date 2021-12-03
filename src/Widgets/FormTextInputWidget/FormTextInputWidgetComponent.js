import * as React from "react";
import * as Scrivito from "scrivito";

Scrivito.provideComponent("FormTextInputWidget", ({ widget }) => (
  <Scrivito.ContentTag
    className="form-text-input-widget"
    content={widget}
    attribute="headline"
  />
));
