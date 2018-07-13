import * as React from "react";

function CollapseToggle({ expanded, toggleExpanded }) {
  const classNames = ["navbar-toggler"];
  if (!expanded) {
    classNames.push("collapsed");
  }

  return (
    <button
      type="button"
      className={classNames.join(" ")}
      aria-expanded={expanded}
      aria-controls="navbar"
      onClick={toggleExpanded}
    >
      <span className="sr-only">Toggle navigation</span>
      <span className="icon-bar" />
      <span className="icon-bar" />
      <span className="icon-bar" />
    </button>
  );
}

export default CollapseToggle;
