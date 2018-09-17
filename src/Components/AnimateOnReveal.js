import * as React from "react";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";

function AnimateOnReveal({ animation, children }) {
  if (!animation) {
    return children;
  }
  if (animation === "zoomIn") {
    return <Zoom>{children}</Zoom>;
  }
  return <Fade {...fadeProps(animation)}>{children}</Fade>;
}

function fadeProps(animation) {
  switch (animation) {
    case "fadeInLeft":
      return { left: true };
    case "fadeInRight":
      return { right: true };
    case "fadeInDown":
      return { top: true };
    case "fadeInUp":
      return { bottom: true };
  }
  return {};
}

export default AnimateOnReveal;
