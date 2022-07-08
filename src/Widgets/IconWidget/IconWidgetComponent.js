import * as React from "react";
import * as Scrivito from "scrivito";
import { IconComponent } from "../../Components/Icon";
import { WrapIfClassName } from "../../Components/WrapIfClassName";
import { alignmentClassName } from "../../utils/alignmentClassName";

export const IconWidgetComponent = Scrivito.connect(
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
);

Scrivito.provideComponent("IconWidget", IconWidgetComponent);
