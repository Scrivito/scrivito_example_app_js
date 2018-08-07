import * as React from "react";
import * as Scrivito from "scrivito";
import placeholderCss from "../../utils/placeholderCss";
import TableRowWidget from "../TableRowWidget/TableRowWidgetClass";
import TableRowWidgetComponent from "../TableRowWidget/TableRowWidgetComponent";

Scrivito.provideComponent("TableWidget", ({ widget }) => (
  <table className="table-features">
    <thead>
      <tr>
        <Scrivito.ContentTag tag="th" content={widget} attribute="header1" />
        <Scrivito.ContentTag tag="th" content={widget} attribute="header2" />
        <Scrivito.ContentTag tag="th" content={widget} attribute="header3" />
        <Scrivito.ContentTag tag="th" content={widget} attribute="header4" />
      </tr>
    </thead>
    <tbody>
      {widget.get("rows").map((rowWidget, index) => {
        return (
          <TableRowWidgetComponent
            key={`${rowWidget.id()}${index}`}
            widget={rowWidget}
            header2={widget.get("header2")}
            header3={widget.get("header3")}
            header4={widget.get("header4")}
          />
        );
      })}
      <AddMoreRows
        widget={widget}
        attribute="rows"
        title="Click to add a row"
      />
    </tbody>
    <tfoot>
      {widget.get("summaryRows").map((rowWidget, index) => {
        return (
          <TableRowWidgetComponent
            key={`${rowWidget.id()}${index}`}
            widget={rowWidget}
            header2={widget.get("header2")}
            header3={widget.get("header3")}
            header4={widget.get("header4")}
          />
        );
      })}
      <AddMoreRows
        widget={widget}
        attribute="summaryRows"
        title="Click to add a summary row"
        maxRows={1}
      />
    </tfoot>
  </table>
));

const AddMoreRows = Scrivito.connect(
  ({ widget, title, attribute, maxRows }) => {
    if (!Scrivito.isInPlaceEditingActive()) {
      return null;
    }

    const currentRows = widget.get(attribute);
    if (maxRows && currentRows.length >= maxRows) {
      return null;
    }

    return (
      <tr>
        <th colSpan="4">
          <div className="text-center">
            <a
              href="#"
              style={placeholderCss}
              onClick={e => {
                e.preventDefault();
                e.stopPropagation();

                const updatedAttributes = {};
                updatedAttributes[attribute] = [
                  ...currentRows,
                  new TableRowWidget({}),
                ];
                widget.update(updatedAttributes);
              }}
            >
              {title}
            </a>
          </div>
        </th>
      </tr>
    );
  }
);
