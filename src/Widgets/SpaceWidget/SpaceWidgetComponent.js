import * as React from 'react';
import * as Scrivito from 'scrivito';

Scrivito.provideComponent('SpaceWidget', ({ widget }) => {
  const size = widget.get('size') || 'medium';
  const freeSize = size === 'free' ? widget.get('freeSize') : '';
  return (
    <hr
      className={`scrivito-space-widget space-widget ${size}`}
      style={{ height: `${freeSize}` }}
    />
  );
});
