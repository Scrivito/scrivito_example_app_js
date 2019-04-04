import * as React from "react";
import * as Scrivito from "scrivito";
import urlFromBinary from "../../utils/urlFromBinary";

Scrivito.provideComponent("AboutBoxWidget", ({ widget }) => {
  const url = urlFromBinary(widget.get("image"));
  const position = widget.get("position");
  const name = widget.get("name");

  return (
    <div className="about-box">
      <img src={url} />
      <div className="body">
        <div className="position">{position}</div>
        <div className="name">{name}</div>
      </div>
    </div>
  );
});
