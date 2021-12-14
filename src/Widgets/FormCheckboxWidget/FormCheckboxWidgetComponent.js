import * as React from "react";
import * as Scrivito from "scrivito";
import { UncontrolledPopover, PopoverBody } from "reactstrap";
import { getFieldName } from "../FormContainerWidget/utils/getFieldName";

Scrivito.provideComponent("FormCheckboxWidget", ({ widget }) => {
  const id = `form_checkbox_widget_${widget.id()}`;
  const questionMarkId = `${id}_question_mark`;
  const mandatoryId = `${id}_mandatory`;

  const labelOptions = {};
  if (!Scrivito.isInPlaceEditingActive()) {
    labelOptions.htmlFor = id;
  }

  return (
    <div className="form-check form-check-inline mb-2">
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

      {widget.get("helpText") ? (
        <>
          <i
            className="fa fa-question-circle-o fa-1x ml-1 help-cursor"
            id={questionMarkId}
          ></i>
          <UncontrolledPopover
            placement="bottom"
            target={questionMarkId}
            trigger="legacy"
          >
            <PopoverBody>
              <Scrivito.InPlaceEditingOff>
                <Scrivito.ContentTag content={widget} attribute="helpText" />
              </Scrivito.InPlaceEditingOff>
            </PopoverBody>
          </UncontrolledPopover>
        </>
      ) : null}
    </div>
  );
});
