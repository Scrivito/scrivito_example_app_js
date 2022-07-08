import * as React from "react";
import * as Scrivito from "scrivito";
import { InPlaceEditingPlaceholder } from "./InPlaceEditingPlaceholder";

export const Footer = Scrivito.connect(function Footer() {
  const root = Scrivito.Obj.root();
  if (!root) return null;

  return (
    <React.Fragment>
      <InPlaceEditingPlaceholder block center>
        The footer starts here. There’s only one footer. It belongs to the
        homepage but is displayed on all other pages as well.
      </InPlaceEditingPlaceholder>
      <Scrivito.ContentTag
        content={root}
        attribute="footer"
        tag="footer"
        id="footer"
      />
    </React.Fragment>
  );
});
