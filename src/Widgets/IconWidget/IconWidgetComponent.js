import * as React from "react";
import * as Scrivito from "scrivito";
import IconComponent from "../../Components/Icon";

function IconWidgetComponent({ widget }) {
  const icon = widget.get("icon");
  const link = widget.get("link");
  const size = widget.get("size");

  if (["center", "right"].includes(widget.get("alignment"))) {
    return (
      <div className={`text-${widget.get("alignment")}`}>
        <IconComponent icon={icon} size={size} link={link} />
      </div>
    );
  }

  return <IconComponent icon={icon} size={size} link={link} />;
}

Scrivito.provideComponent("IconWidget", IconWidgetComponent);

export default Scrivito.connect(IconWidgetComponent);
