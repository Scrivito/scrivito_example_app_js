import * as React from "react";
import * as Scrivito from "scrivito";

import "./ShawnTest.scss";

Scrivito.provideComponent("ShawnTest", ({ widget }) => (
  <div>
    <Scrivito.ContentTag
      className="shawn-test h2"
      content={widget}
      attribute="headline"
    />
    <div>
      <Scrivito.ContentTag
      className="shawn-test"
      content={widget}
      attribute="body"
      />
    </div>
  </div>
));
