import * as React from 'react';
import * as Scrivito from 'scrivito';
import InPlaceEditingPlaceholder from '../../Components/InPlaceEditingPlaceholder';

Scrivito.provideComponent('ColumnContainerWidget', ({ widget }) => {
  const columns = widget.get('columns');

  if (!columns.length) {
    return (
      <InPlaceEditingPlaceholder center={ true }>
        Define columns in the widget properties.
      </InPlaceEditingPlaceholder>
    );
  }

  const content = columns.map((columnWidget, index) => {
    const colSize = columnWidget.get('colSize') || 1;
    return (
      <div key={ index } className={ `col-lg-${colSize}` }>
        <Scrivito.ContentTag content={ columnWidget } attribute="content"
          className="h-100" />
      </div>
    );
  });

  const classNames = ['row'];
  if (widget.get('alignmentSize') === 'align-items-start') {
    classNames.push('align-items-start');
  }
  if (widget.get('alignmentSize') === 'align-items-center') {
    classNames.push('align-items-center');
  }
  if (widget.get('alignmentSize') === 'align-items-end') {
    classNames.push('align-items-end');
  }
  if (widget.get('alignmentSize') === 'align-items-stretch') {
    classNames.push('align-items-stretch');
  }

  return (
    <div className={ classNames.join(' ') }>
      { content }
    </div>
  );
});
