import * as React from "react";
import { Slide, Zoom } from "react-awesome-reveal";

function AnimateOnReveal({ animation, children }) {
  switch (animation) {
    case "zoomIn":
      return <Zoom triggerOnce={true}>{children}</Zoom>;
    case "fadeInLeft":
      return (
        <Slide triggerOnce={true} direction="left">
          {children}
        </Slide>
      );
    case "fadeInRight":
      return (
        <Slide triggerOnce={true} direction="right">
          {children}
        </Slide>
      );
    case "fadeInDown":
      return (
        <Slide triggerOnce={true} direction="down">
          {children}
        </Slide>
      );
    case "fadeInUp":
      return (
        <Slide triggerOnce={true} direction="up">
          {children}
        </Slide>
      );
    default:
      return children;
  }
}

export default AnimateOnReveal;
