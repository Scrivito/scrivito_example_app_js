import * as React from "react";
import * as Scrivito from "scrivito";

import "./ShawnTestPage.scss";

Scrivito.provideComponent("ShawnTestPage", ({ page }) => (
  <Scrivito.ContentTag
    tag="div"
    className="shawn-test-page"
    content={page}
    attribute="body"
  />
));
