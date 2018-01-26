Scrivito.provideComponent('HeadlineWidget', ({ widget }) => {
  const style = widget.get('style') || 'h1';
  const level = widget.get('level') || style;
  const classNames = [style];
  if (widget.get('alignment')) {
    classNames.push(`text-${widget.get('alignment')}`);
  }
  if (widget.get('showDividingLine') === 'yes') {
    classNames.push('border-bottom');
  }
  if (widget.get('showMargin') === 'no') {
    classNames.push('no-margin');
  }

  return <Scrivito.ContentTag
    tag={ level }
    content={ widget }
    attribute="headline"
    className={ classNames.join(' ') }
  />;
});
