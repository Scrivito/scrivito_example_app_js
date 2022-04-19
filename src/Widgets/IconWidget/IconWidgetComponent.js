import * as React from "react";
import * as Scrivito from "scrivito";
import IconComponent from "../../Components/Icon";
import { alignmentClassName } from "../../utils/alignmentClassName";

function IconWidgetComponent({ widget }) {
  const icon = widget.get("icon");
  const link = widget.get("link");
  const size = widget.get("size");

  const wrapperClassName = alignmentClassName(widget.get("alignment"));

  if (wrapperClassName) {
    return (
      <div className={wrapperClassName}>
        <IconComponent icon={icon} size={size} link={link} />
      </div>
    );
  }

  return <IconComponent icon={icon} size={size} link={link} />;
}

Scrivito.provideComponent("IconWidget", IconWidgetComponent);

export default Scrivito.connect(IconWidgetComponent);
