import * as React from "react";
import { Link as ScrollLink } from "react-scroll";

function ScrollToNextSectionLink({ heightClassName }) {
  if (heightClassName !== "full-height") {
    return null;
  }

  return (
    <ScrollLink
      to="nextSection"
      smooth
      duration={500}
      className="btn-round btn-white-transparent hidden-xs"
    >
      <i className="fa fa-angle-down" aria-hidden="true" />
    </ScrollLink>
  );
}

export default ScrollToNextSectionLink;
