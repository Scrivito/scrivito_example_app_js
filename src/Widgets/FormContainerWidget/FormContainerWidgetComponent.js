import * as React from "react";
import * as Scrivito from "scrivito";

import "./FormContainerWidget.scss";

Scrivito.provideComponent("FormContainerWidget", ({ widget }) => (
  <div className="form-container-widget">
    <form method="post">
      <Scrivito.ContentTag content={widget} attribute="content" />
    </form>
  </div>
));
