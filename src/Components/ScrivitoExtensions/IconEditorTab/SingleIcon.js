import * as React from "react";
import IconComponent from "../../Icon";

function SingleIcon({ icon, setWidgetIcon, currentIcon }) {
  const cssIcon = `fa-${icon.id}`;

  const aClassNames = [];
  if (currentIcon === cssIcon) {
    aClassNames.push("active");
  }

  return (
    <div className="fa-hover col-md-3 col-sm-4">
      <span
        className={aClassNames.join(" ")}
        onClick={e => setWidgetIcon(e, cssIcon)}
      >
        <IconComponent icon={cssIcon} />
        <span className="sr-only">Example of </span>
        {icon.name}
      </span>
    </div>
  );
}

export default SingleIcon;
