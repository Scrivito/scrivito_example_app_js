import * as React from "react";
import * as Scrivito from "scrivito";
import sr from "scrollreveal";

class ImageWidget extends React.Component {
  componentDidMount() {
    const duration = 1000;
    const delay = 150;
    const distance = "500px";
    const easing = "ease";

    const configRight = {
      origin: "right",
      duration,
      delay,
      distance,
    };

    const configLeft = {
      origin: "left",
      duration,
      delay,
      distance,
      easing,
    };

    const configUp = {
      origin: "top",
      duration,
      delay,
      distance,
      easing,
    };

    const configBottom = {
      origin: "bottom",
      duration,
      delay,
      distance,
      easing,
    };

    const configZoom = {
      duration: 1000,
      delay,
      scale: 0.6,
      easing,
    };

    sr.reveal(".animated.right", configRight);
    sr.reveal(".animated.left", configLeft);
    sr.reveal(".animated.top", configUp);
    sr.reveal(".animated.bottom", configBottom);
    sr.reveal(".animated.zoom", configZoom);
  }

  render() {
    const widget = this.props.widget;

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

    classNames.push(`animated ${widget.get("animation")}`);

    return <div className={classNames.join(" ")}>{image}</div>;
  }
}

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

Scrivito.provideComponent("ImageWidget", ImageWidget);
