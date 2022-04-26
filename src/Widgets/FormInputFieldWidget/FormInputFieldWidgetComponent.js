import * as React from "react";
import * as Scrivito from "scrivito";
import { Popover, OverlayTrigger } from "react-bootstrap";
import { getFieldName } from "../FormContainerWidget/utils/getFieldName";
import { isCustomType } from "../FormContainerWidget/utils/isCustomType";

Scrivito.provideComponent("FormInputFieldWidget", ({ widget }) => {
  const id = `form_text_input_widget_${widget.id()}`;

  const fieldName = getFieldName(widget);
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
        <OverlayTrigger
          placement="bottom"
          trigger="click"
          overlay={
            <Popover>
              <Popover.Body>mandatory</Popover.Body>
            </Popover>
          }
        >
          <span className="text-mandatory help-cursor">*</span>
        </OverlayTrigger>
      ) : null}

      {widget.get("helpText") ? (
        <OverlayTrigger
          placement="bottom"
          trigger="click"
          overlay={
            <Popover>
              <Popover.Body>
                <Scrivito.InPlaceEditingOff>
                  <Scrivito.ContentTag content={widget} attribute="helpText" />
                </Scrivito.InPlaceEditingOff>
              </Popover.Body>
            </Popover>
          }
        >
          <i className="fa fa-question-circle-o fa-1x ml-1 help-cursor"></i>
        </OverlayTrigger>
      ) : null}

      {isCustomType(widget) && widget.get("customType") === "multi_line" ? (
        <textarea
          className="form-control"
          id={id}
          rows="3"
          name={fieldName}
          placeholder={widget.get("placeholder")}
          required={widget.get("required")}
        />
      ) : (
        <input
          className="form-control"
          id={id}
          name={fieldName}
          maxLength={calculateMaxLength(fieldName)}
          placeholder={widget.get("placeholder")}
          type={calculateType(fieldName)}
          required={widget.get("required")}
        />
      )}
    </div>
  );
});

function calculateMaxLength(fieldName) {
  switch (fieldName) {
    case "phone_number":
      return "50";
    case "email":
      return "120";
    default:
      return "250";
  }
}

function calculateType(type) {
  if (type === "email") {
    return "email";
  }

  if (type === "phone_number") {
    return "tel";
  }

  return "text";
}
