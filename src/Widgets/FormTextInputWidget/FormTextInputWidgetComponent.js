import * as React from "react";
import * as Scrivito from "scrivito";
import { UncontrolledPopover, PopoverBody } from "reactstrap";

Scrivito.provideComponent("FormTextInputWidget", ({ widget }) => {
  const id = `FormTextInputWidget_${widget.id()}`;
  const mandatoryId = `${id}_mandatory`;

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
      {widget.get("required") ? (
        <>
          <span className="text-mandatory help-cursor" id={mandatoryId}>
            *
          </span>
          <UncontrolledPopover
            placement="bottom"
            target={mandatoryId}
            trigger="legacy"
          >
            <PopoverBody>mandatory</PopoverBody>
          </UncontrolledPopover>
        </>
      ) : null}

      <input
        className="form-control"
        id={id}
        name={type}
        maxLength="250"
        placeholder={widget.get("placeholder")}
        type={calculateType(type)}
        required={widget.get("required")}
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
