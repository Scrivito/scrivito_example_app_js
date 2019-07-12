import * as React from "react";
import * as Scrivito from "scrivito";

Scrivito.provideComponent("TextCardWidget", ({ widget }) => {
  const headerColor = widget.get("headerColor") || "black";

  return (
    <div className="card text-card">
      {
        (widget.get("header")) && 
        <div className="text-card__header">
          <span className={`badge badge-pill ${headerColor}`}>
            {widget.get("header")}
          </span>
        </div>
      }
      <div className="card-body text-center">
        <h5 className="card-title">{widget.get("title")}</h5>
        <Scrivito.ContentTag
          tag="div"
          className="card-text"
          content={widget}
          attribute="description"
        />
      </div>
    </div>
  );
});
