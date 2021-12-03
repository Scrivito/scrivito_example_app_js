import * as React from "react";
import * as Scrivito from "scrivito";

import "./FormContainerWidget.scss";

Scrivito.provideComponent("FormContainerWidget", ({ widget }) => (
  <div className="form-container-widget">
    <form method="post">
      <input type="hidden" name="form_id" value={widget.get("formId")} />
      <Scrivito.ContentTag content={widget} attribute="content" />
    </form>
  </div>
));
