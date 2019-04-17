import * as React from "react";
import * as Scrivito from "scrivito";
import urlFromBinary from "../../utils/urlFromBinary";

Scrivito.provideComponent("AboutBoxWidget", ({ widget }) => {
  const url = urlFromBinary(widget.get("image"));
  const position = widget.get("position");
  const name = widget.get("name");
  const email = widget.get("email");

  return (
    <div className="about-box">
      <img src={url} />
      <div className="body">
        {position && <div className="position">{position}</div>}
        {name && <div className="name">{name}</div>}
        {email && <div className="email">{email}</div>}
      </div>
    </div>
  );
});
