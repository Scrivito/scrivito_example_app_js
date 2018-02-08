import * as React from 'react';
import * as Scrivito from 'scrivito';

Scrivito.provideComponent('BoxWidget', ({ widget }) => {
  const classNames = ['panel', 'panel-theme'];
  if (widget.get('useOffset') === 'yes') { classNames.push('box-offset'); }

  return (
    <div className={ classNames.join(' ') }>
      <Scrivito.ContentTag content={ widget } attribute="body" className="panel-body" />
    </div>
  );
});
