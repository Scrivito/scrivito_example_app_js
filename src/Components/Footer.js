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
        The footer starts here. There’s only one footer. It belongs to the
        homepage but is displayed on all other pages as well.
      </InPlaceEditingPlaceholder>
      <Scrivito.ContentTag content={root} attribute="footer" tag="footer" />
    </React.Fragment>
  );
}

export default Scrivito.connect(Footer);
