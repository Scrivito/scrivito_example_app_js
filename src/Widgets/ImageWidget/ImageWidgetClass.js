const ImageWidget = Scrivito.provideWidgetClass('ImageWidget', {
  attributes: {
    image: 'reference',
    alignment: ['enum', { values: ['left', 'center', 'right'] }],
    alternativeText: 'string',
  },
});

export default ImageWidget;
