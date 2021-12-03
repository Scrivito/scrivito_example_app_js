import * as React from "react";
import * as Scrivito from "scrivito";

Scrivito.provideComponent("FormSubmitButtonWidget", ({ widget }) => {
  if (["center", "right"].includes(widget.get("alignment"))) {
    return (
      <div className={`text-${widget.get("alignment")}`}>
        <Button buttonText={widget.get("buttonText")} />
      </div>
    );
  }

  return <Button buttonText={widget.get("buttonText")} />;
});

function Button({ buttonText }) {
  return (
    <button className="btn btn-primary" type="submit">
      {buttonText}
    </button>
  );
}
