import * as React from "react";
import * as Scrivito from "scrivito";
import { Popover, OverlayTrigger } from "react-bootstrap";
import { getFieldName } from "../FormContainerWidget/utils/getFieldName";

Scrivito.provideComponent("FormCheckboxWidget", ({ widget }) => {
  const id = `form_checkbox_widget_${widget.id()}`;

  return (
    <div className="form-check mb-3">
      <input
        className="form-check-input"
        id={id}
        type="checkbox"
        name={getFieldName(widget)}
        required={widget.get("required")}
      />

      <Scrivito.ContentTag
        className="form-check-label"
        content={widget}
        attribute="label"
        tag="label"
        htmlFor={id}
      />
      {widget.get("required") ? (
        <OverlayTrigger
          placement="top"
          trigger="hover"
          overlay={
            <Popover>
              <Popover.Body>mandatory</Popover.Body>
            </Popover>
          }
        >
          <span className="text-mandatory">*</span>
        </OverlayTrigger>
      ) : null}

      {widget.get("helpText") ? (
        <OverlayTrigger
          placement="top"
          trigger="hover"
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
          <i className="fa fa-question-circle-o fa-1x ml-1"></i>
        </OverlayTrigger>
      ) : null}
    </div>
  );
});
