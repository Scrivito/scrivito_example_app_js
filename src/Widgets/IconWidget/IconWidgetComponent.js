import * as React from "react";
import * as Scrivito from "scrivito";
import IconComponent from "../../Components/Icon";
import { WrapIfClassName } from "../../Components/WrapIfClassName";
import { alignmentClassName } from "../../utils/alignmentClassName";

function IconWidgetComponent({ widget }) {
  const icon = widget.get("icon");
  const link = widget.get("link");
  const size = widget.get("size");

  return (
    <WrapIfClassName className={alignmentClassName(widget.get("alignment"))}>
      <IconComponent icon={icon} size={size} link={link} />
    </WrapIfClassName>
  );
}

Scrivito.provideComponent("IconWidget", IconWidgetComponent);

export default Scrivito.connect(IconWidgetComponent);
