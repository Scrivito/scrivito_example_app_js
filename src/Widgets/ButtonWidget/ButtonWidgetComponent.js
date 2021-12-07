import * as React from "react";
import * as Scrivito from "scrivito";
import InPlaceEditingPlaceholder from "../../Components/InPlaceEditingPlaceholder";

Scrivito.provideComponent("ButtonWidget", ({ widget }) => {
  const target = widget.get("target");
  let text = target && target.title();
  if (!text) {
    text = (
      <InPlaceEditingPlaceholder>
        Provide the button text in the widget properties.
      </InPlaceEditingPlaceholder>
    );
  }

  const classNames = ["btn"];
  classNames.push(widget.get("style") || "btn-primary");

  if (widget.get("alignment") === "block") {
    classNames.push("btn-block");
  }

  return (
    <AlignmentWrapper alignment={widget.get("alignment")}>
      <Scrivito.LinkTag to={target} className={classNames.join(" ")}>
        {text}
        <i className="fa fa-angle-right fa-4" aria-hidden="true" />
      </Scrivito.LinkTag>
    </AlignmentWrapper>
  );
});

function AlignmentWrapper({ alignment, children }) {
  return ["center", "right"].includes(alignment) ? (
    <div className={`text-${alignment}`}>{children}</div>
  ) : (
    children
  );
}
