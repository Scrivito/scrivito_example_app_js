import * as React from "react";
import * as Scrivito from "scrivito";

export const NavigationSection = Scrivito.connect(function NavigationSection({
  heightClassName,
}) {
  if (!["full-height", "medium-height"].includes(heightClassName)) return null;

  if (!Scrivito.currentPage()) return null;
  const obj = Scrivito.currentPage();
  if (!obj.get("navigationSection")) return null;

  return (
    <Scrivito.ContentTag
      tag="div"
      className="container"
      content={obj}
      attribute="navigationSection"
    />
  );
});
