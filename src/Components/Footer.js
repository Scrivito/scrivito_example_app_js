import * as React from 'react';
import * as Scrivito from 'scrivito';

function Footer() {
  const root = Scrivito.Obj.root();

  if (!root) { return null; }

  return (
    <Scrivito.ContentTag content={ root } attribute="footer" tag="footer" />
  );
}

export default Scrivito.connect(Footer);
