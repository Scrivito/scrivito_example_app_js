import * as React from "react";
import * as Scrivito from "scrivito";
import InPlaceEditingPlaceholder from "../../Components/InPlaceEditingPlaceholder";

Scrivito.provideComponent("ColumnContainerWidget", ({ widget }) => {
  const columns = widget.get("columns");

  if (!columns.length) {
    return (
      <InPlaceEditingPlaceholder center>
        Define columns in the widget properties.
      </InPlaceEditingPlaceholder>
    );
  }

  const content = columns.map((columnWidget, index) => {
    const colSize = columnWidget.get("colSize") || 1;
    return (
      <div key={index} className={`col-lg-${colSize}`}>
        <Scrivito.ContentTag
          content={columnWidget}
          attribute="content"
          className="h-100"
        />
      </div>
    );
  });

  const classNames = ["row"];

  if (widget.get("alignment")) {
    classNames.push(`align-items-${widget.get("alignment")}`);
  } else {
    classNames.push("align-items-start");
  }

  return <div className={classNames.join(" ")}>{content}</div>;
});
