import * as React from "react";
import * as Scrivito from "scrivito";
import InPlaceEditingPlaceholder from "./InPlaceEditingPlaceholder";

function Footer() {
  const root = Scrivito.Obj.root();

  if (!root) {
    return null;
  }

  return (
    <>
      <InPlaceEditingPlaceholder block center>
        Below the footer starts, it will be look the same on each page
      </InPlaceEditingPlaceholder>
      <Scrivito.ContentTag content={root} attribute="footer" tag="footer" />
    </>
  );
}

export default Scrivito.connect(Footer);
