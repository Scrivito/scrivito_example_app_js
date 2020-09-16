import * as React from "react";
import { Slide, Zoom } from "react-awesome-reveal";

function AnimateOnReveal({ animation, children }) {
  switch (animation) {
    case "zoomIn":
      return <Zoom>{children}</Zoom>;
    case "fadeInLeft":
      return <Slide direction="left">{children}</Slide>;
    case "fadeInRight":
      return <Slide direction="right">{children}</Slide>;
    case "fadeInDown":
      return <Slide direction="down">{children}</Slide>;
    case "fadeInUp":
      return <Slide direction="up">{children}</Slide>;
    default:
      return children;
  }
}

export default AnimateOnReveal;
