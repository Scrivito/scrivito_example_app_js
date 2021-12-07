import * as React from "react";
import * as Scrivito from "scrivito";

Scrivito.provideComponent("FormSubmitButtonWidget", ({ widget }) => (
  <WrapIfClassName
    className={
      ["center", "right"].includes(widget.get("alignment")) &&
      `text-${widget.get("alignment")}`
    }
  >
    <button className="btn btn-primary" type="submit">
      {widget.get("buttonText")}
    </button>
  </WrapIfClassName>
));

function WrapIfClassName({ className, children }) {
  return className ? <div className={className}>{children}</div> : children;
}
