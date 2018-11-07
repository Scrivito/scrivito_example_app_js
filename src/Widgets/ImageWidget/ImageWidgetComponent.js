import * as React from "react";
import * as Scrivito from "scrivito";
import AnimateOnReveal from "../../Components/AnimateOnReveal";

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

  return (
    <AnimateOnReveal animation={widget.get("animation")}>
      <div className={classNames.join(" ")}>{image}</div>
    </AnimateOnReveal>
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
