import * as React from "react";
import * as Scrivito from "scrivito";

process.env.ENABLE_NEOLETTER_FORM_BUILDER &&
  Scrivito.provideComponent("FormButtonWidget", ({ widget }) => (
    <WrapIfClassName
      className={
        ["center", "right"].includes(widget.get("alignment")) &&
        `text-${widget.get("alignment")}`
      }
    >
      <button
        className={`btn btn-primary${
          widget.get("alignment") === "block" ? " btn-block" : ""
        }`}
        type="submit"
      >
        {widget.get("buttonText")}
      </button>
    </WrapIfClassName>
  ));

function WrapIfClassName({ className, children }) {
  return className ? <div className={className}>{children}</div> : children;
}
