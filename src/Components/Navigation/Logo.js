import * as React from "react";
import * as Scrivito from "scrivito";

function logoObj({ scrolled, navigationStyle }) {
  let logoVersion;
  if (scrolled) {
    logoVersion = "logoDark";
  } else if (navigationStyle === "transparentDark") {
    logoVersion = "logoWhite";
  } else {
    logoVersion = "logoDark";
  }

  const root = Scrivito.Obj.root();
  if (root) {
    return root.get(logoVersion);
  }
}

function Logo({ scrolled, navigationStyle }) {
  if (!Scrivito.Obj.root()) {
    return null;
  }

  const logo = logoObj({ scrolled, navigationStyle });

  return (
    <Scrivito.LinkTag to={Scrivito.Obj.root()} className="navbar-brand">
      <Scrivito.ImageTag content={logo} alt="Logo" />
    </Scrivito.LinkTag>
  );
}

export default Scrivito.connect(Logo);
