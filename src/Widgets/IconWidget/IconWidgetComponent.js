import * as React from "react";
import * as Scrivito from "scrivito";
import IconComponent from "../../Components/Icon";
import { WrapIfClassName } from "../../Components/WrapIfClassName";
import { alignmentClassName } from "../../utils/alignmentClassName";

function IconWidgetComponent({ widget }) {
  return (
    <WrapIfClassName className={alignmentClassName(widget.get("alignment"))}>
      <IconComponent
        icon={widget.get("icon")}
        size={widget.get("size")}
        link={widget.get("link")}
      />
    </WrapIfClassName>
  );
}

Scrivito.provideComponent("IconWidget", IconWidgetComponent);

export default Scrivito.connect(IconWidgetComponent);
