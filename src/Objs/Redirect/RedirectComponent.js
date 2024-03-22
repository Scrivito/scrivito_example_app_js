import * as React from "react";
import * as Scrivito from "scrivito";
import { InPlaceEditingPlaceholder } from "../../Components/InPlaceEditingPlaceholder";

Scrivito.provideComponent("Redirect", ({ page }) => {
  React.useEffect(() => {
    Scrivito.load(() => {
      const link = page.get("link");
      const url = link && Scrivito.urlFor(link);

      return { link, url };
    }).then(({ link, url }) => {
      if (!link) return;

      if (link.isExternal()) {
        window.top.location.replace(url);
      } else {
        window.location.replace(url);
      }
    });
  }, [page]);

  const link = page.get("link");

  if (!link) {
    return (
      <InPlaceEditingPlaceholder center>
        Select a link in the redirect page properties.
      </InPlaceEditingPlaceholder>
    );
  }

  return null;
});
