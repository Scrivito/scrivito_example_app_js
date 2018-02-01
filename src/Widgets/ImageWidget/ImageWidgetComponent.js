Scrivito.provideComponent('ImageWidget', ({ widget }) => {
  let image = <Scrivito.ImageTag
    content={ widget }
    attribute="image"
    alt={ alternativeText(widget) }
  />;

  const link = widget.get('link');
  if (link && !Scrivito.isInPlaceEditingActive()) {
    image = <Scrivito.LinkTag to={ link }>
      { image }
    </Scrivito.LinkTag>;
  }

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
