import * as React from "react";

function ScrollToNextSectionLink({ heightClassName }) {
  if (heightClassName !== "full-height") {
    return null;
  }

  return (
    <a
      href="#mainContent"
      className="btn-round btn-white-transparent hidden-xs"
    >
      <i className="fa fa-angle-down" aria-hidden="true" />
    </a>
  );
}

export default ScrollToNextSectionLink;
