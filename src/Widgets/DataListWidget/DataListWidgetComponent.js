import * as React from "react";
import * as Scrivito from "scrivito";
import { DataListWidget } from "./DataListWidgetClass";

Scrivito.provideComponent(DataListWidget, ({ widget }) => {
  const dataScope = Scrivito.useDataLocator(widget.get("data"));

  return (
    <div>
      {dataScope.take().map((dataItem) => (
        <Scrivito.ContentTag
          content={widget}
          attribute="content"
          dataContext={dataItem}
          key={dataItem.id()}
        />
      ))}
    </div>
  );
});
