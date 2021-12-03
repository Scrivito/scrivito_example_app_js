import * as React from "react";
import * as Scrivito from "scrivito";

Scrivito.provideComponent("FormTextInputWidget", ({ widget }) => {
  const id = `FormTextInputWidget_${widget.id()}`;

  const type = widget.get("type");
  const labelOptions = {};
  if (!Scrivito.isInPlaceEditingActive()) {
    labelOptions.htmlFor = id;
  }

  return (
    <div className="form-group">
      <Scrivito.ContentTag
        content={widget}
        attribute="label"
        tag="label"
        {...labelOptions}
      />

      <input
        className="form-control"
        id={id}
        name={type}
        maxLength="250"
        placeholder={widget.get("placeholder")}
        type={calculateType(type)}
      />
    </div>
  );
});

function calculateType(type) {
  if (type === "email") {
    return "email";
  }

  return "text";
}
