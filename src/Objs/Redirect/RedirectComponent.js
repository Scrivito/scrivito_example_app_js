import * as React from "react";
import * as Scrivito from "scrivito";
import { InPlaceEditingPlaceholder } from "../../Components/InPlaceEditingPlaceholder";

Scrivito.provideComponent("Redirect", ({ page }) => {
  const link = page.get("link");

  React.useEffect(() => {
    if (!link) return;

    Scrivito.load(() => Scrivito.urlFor(link)).then((url) => {
      if (link.isExternal()) {
        window.top.location.replace(url);
      } else {
        window.location.replace(url);
      }
    });
  }, [link]);

  if (!link) {
    return (
      <InPlaceEditingPlaceholder center>
        Select a link in the redirect page properties.
      </InPlaceEditingPlaceholder>
    );
  }

  return null;
});
