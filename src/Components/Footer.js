import * as React from "react";
import * as Scrivito from "scrivito";
import InPlaceEditingPlaceholder from "./InPlaceEditingPlaceholder";

function Footer() {
  const root = Scrivito.Obj.root();

  if (!root) {
    return null;
  }

  return (
    <React.Fragment>
      <InPlaceEditingPlaceholder block center>
        The footer starts below, it will look the same on each page.
      </InPlaceEditingPlaceholder>
      <Scrivito.ContentTag content={root} attribute="footer" tag="footer" />
    </React.Fragment>
  );
}

export default Scrivito.connect(Footer);
