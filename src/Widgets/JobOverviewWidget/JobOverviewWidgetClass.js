import * as Scrivito from 'scrivito';

const JobOverviewWidget = Scrivito.provideWidgetClass('JobOverviewWidget', {
  attributes: {
    location: 'string',
  },
});

export default JobOverviewWidget;
