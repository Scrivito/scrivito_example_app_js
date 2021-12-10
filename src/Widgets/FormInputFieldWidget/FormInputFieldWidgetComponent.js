import * as React from "react";
import * as Scrivito from "scrivito";
import { UncontrolledPopover, PopoverBody } from "reactstrap";

Scrivito.provideComponent("FormInputFieldWidget", ({ widget }) => {
  const id = `form_text_input_widget_${widget.id()}`;
  const questionMarkId = `${id}_question_mark`;
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
