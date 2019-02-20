import * as React from "react";
import * as Scrivito from "scrivito";

Scrivito.provideComponent("TimeBoxWidget", ({ widget }) => {
  const displayFrom = widget.get('displayFrom');
  const displayUntil = widget.get('displayUntil');
  const editing = Scrivito.isInPlaceEditingActive();
  const now = new Date();
  const display = (
    (now >= displayFrom) && 
    (!displayUntil || now <= displayUntil)
  );

  if (!display && !editing) {
    return null;
  }

  const displayContent = `Display period set from
    ${displayFrom ? displayFrom.toLocaleDateString('en') : '…'}
    until
    ${displayUntil ? displayUntil.toLocaleDateString('en') : '…'}
    `;

  if (editing) return (
    <div>
      <div className='text-center strong text-danger'>{ displayContent }</div>
      <Scrivito.ContentTag content={widget} attribute="content" />
    </div>
  );

  if (display) return (
    <Scrivito.ContentTag content={widget} attribute="content" />
  );
});
