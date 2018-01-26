const IconContainerWidget = Scrivito.provideWidgetClass('IconContainerWidget', {
  attributes: {
    iconList: ['widgetlist', { only: 'IconWidget' }],
  },
});

export default IconContainerWidget;
