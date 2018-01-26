Scrivito.provideComponent('TextWidget', ({ widget }) => {
  const classNames = [];
  if (widget.get('alignment')) {
    classNames.push(`text-${widget.get('alignment')}`);
  }

  return (
    <Scrivito.ContentTag
      tag="div"
      className={ classNames.join(' ') }
      content={ widget }
      attribute="text"
    />
  );
});
