import * as React from "react";
import * as Scrivito from "scrivito";

function PlainTableRowWidgetComponent({ widget, header2, header3, header4 }) {
  return (
    <tr>
      <Scrivito.ContentTag tag="th" content={widget} attribute="cell1" />
      <Scrivito.ContentTag
        tag="td"
        content={widget}
        attribute="cell2"
        data-th={header2}
      />
      <Scrivito.ContentTag
        tag="td"
        content={widget}
        attribute="cell3"
        data-th={header3}
      />
      <Scrivito.ContentTag
        tag="td"
        content={widget}
        attribute="cell4"
        data-th={header4}
      />
    </tr>
  );
}

const TableRowWidgetComponent = Scrivito.connect(PlainTableRowWidgetComponent);

export default TableRowWidgetComponent;
