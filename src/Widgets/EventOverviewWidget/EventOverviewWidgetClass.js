const EventOverviewWidget = Scrivito.provideWidgetClass('EventOverviewWidget', {
  attributes: {
    maxItems: 'integer',
    showTags: ['enum', { values: ['yes', 'no'] }],
    tags: 'stringlist',
  },
});

export default EventOverviewWidget;
