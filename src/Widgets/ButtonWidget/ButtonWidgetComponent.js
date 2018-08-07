import * as React from "react";
import * as Scrivito from "scrivito";
import InPlaceEditingPlaceholder from "../../Components/InPlaceEditingPlaceholder";

const ButtonWidgetComponent = Scrivito.connect(({ widget }) => {
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

  return (
    <Scrivito.LinkTag to={target} className={classNames.join(" ")}>
      {text}
      <i className="fa fa-angle-right fa-4" aria-hidden="true" />
    </Scrivito.LinkTag>
  );
});

Scrivito.provideComponent("ButtonWidget", ({ widget }) => {
  if (["center", "right"].includes(widget.get("alignment"))) {
    return (
      <div className={`text-${widget.get("alignment")}`}>
        <ButtonWidgetComponent widget={widget} />
      </div>
    );
  }

  return <ButtonWidgetComponent widget={widget} />;
});
