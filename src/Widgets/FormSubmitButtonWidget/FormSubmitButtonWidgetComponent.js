import * as React from "react";
import * as Scrivito from "scrivito";

Scrivito.provideComponent("FormSubmitButtonWidget", ({ widget }) => (
  <Scrivito.ContentTag
    className="form-submit-button-widget"
    content={widget}
    attribute="headline"
  />
));
