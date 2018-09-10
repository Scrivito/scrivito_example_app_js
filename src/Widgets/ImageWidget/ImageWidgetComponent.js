import * as React from "react";
import * as Scrivito from "scrivito";
import Reveal from "react-reveal/Reveal";

Scrivito.provideComponent("ImageWidget", ({ widget }) => {
  let image = (
    <Scrivito.ImageTag
      content={widget}
      attribute="image"
      alt={alternativeText(widget)}
    />
  );

  const link = widget.get("link");
  if (link && !Scrivito.isInPlaceEditingActive()) {
    image = <Scrivito.LinkTag to={link}>{image}</Scrivito.LinkTag>;
  }

  const classNames = [];
  if (["center", "right"].includes(widget.get("alignment"))) {
    classNames.push(`text-${widget.get("alignment")}`);
  }

  let additionalProps = {};
  if (widget.get("animation")) {
    additionalProps = {
      effect: widget.get("animation"),
    };
  }

  return (
    <Reveal {...additionalProps}>
      <div className={classNames.join(" ")}>{image}</div>
    </Reveal>
  );
});

function alternativeText(widget) {
  const widgetAlternativeText = widget.get("alternativeText");
  if (widgetAlternativeText) {
    return widgetAlternativeText;
  }

  const image = widget.get("image");
  if (image) {
    return image.get("alternativeText");
  }

  return "";
}
