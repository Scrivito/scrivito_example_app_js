import * as React from "react";
import * as Scrivito from "scrivito";
import AOS from "aos";

class ImageWidget extends React.Component {
  constructor(props, context) {
    super(props, context);
    AOS.init();
  }

  getDerivedStateFromProps() {
    this.AOS.refresh();
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

    if (["center", "right"].includes(widget.get("alignment"))) {
      return <div className={`text-${widget.get("alignment")}`}>{image}</div>;
    }

    return (
      <div data-aos={`${widget.get("animation")}`} data-aos-duration="500">
        {image}
      </div>
    );
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
