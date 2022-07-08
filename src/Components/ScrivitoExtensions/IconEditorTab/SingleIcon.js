import * as React from "react";
import { IconComponent } from "../../Icon";

/* eslint-disable jsx-a11y/anchor-is-valid */
export function SingleIcon({ icon, setWidgetIcon, currentIcon }) {
  const cssIcon = `fa-${icon.id}`;

  const aClassNames = [];
  if (currentIcon === cssIcon) aClassNames.push("active");

  return (
    <div className="fa-hover col-md-3 col-sm-4">
      <a
        href="#"
        className={aClassNames.join(" ")}
        onClick={(e) => setWidgetIcon(e, cssIcon)}
      >
        <IconComponent icon={cssIcon} />
        <span className="sr-only">Example of </span>
        {icon.name}
      </a>
    </div>
  );
}
/* eslint-enable jsx-a11y/anchor-is-valid */
