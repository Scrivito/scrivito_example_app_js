import * as React from "react";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";

function AnimateOnReveal({ animation, children }) {
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

export default AnimateOnReveal;
