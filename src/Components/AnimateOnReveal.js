import * as React from "react";
import Zoom from "react-reveal-iframe/Zoom";
import Fade from "react-reveal-iframe/Fade";

export function AnimateOnReveal({ animation, children }) {
  switch (animation) {
    case "zoomIn":
      return <Zoom>{children}</Zoom>;
    case "fadeInLeft":
      return <Fade left>{children}</Fade>;
    case "fadeInRight":
      return <Fade right>{children}</Fade>;
    case "fadeInDown":
      return <Fade top>{children}</Fade>;
    case "fadeInUp":
      return <Fade bottom>{children}</Fade>;
    default:
      return children;
  }
}
