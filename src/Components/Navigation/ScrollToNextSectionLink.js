import * as React from "react";

export function ScrollToNextSectionLink({ heightClassName }) {
  if (heightClassName !== "full-height") return null;

  return (
    <a
      href="#nextSection"
      className="btn-round btn-white-transparent hidden-xs"
      aria-label="Scroll to next section"
    >
      <i className="fa fa-angle-down" aria-hidden="true" />
    </a>
  );
}
