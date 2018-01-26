Scrivito.provideComponent('ImageWidget', ({ widget }) => {
  const image = <Scrivito.ImageTag
    content={ widget }
    attribute="image"
    alt={ alternativeText(widget) }
  />;

  if (['center', 'right'].includes(widget.get('alignment'))) {
    return (
      <div className={ `text-${widget.get('alignment')}` }>
        { image }
      </div>
    );
  }

  return image;
});

function alternativeText(widget) {
  const widgetAlternativeText = widget.get('alternativeText');
  if (widgetAlternativeText) {
    return widgetAlternativeText;
  }

  const image = widget.get('image');
  if (image) {
    return image.get('alternativeText');
  }

  return '';
}
