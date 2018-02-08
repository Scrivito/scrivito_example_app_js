import * as Scrivito from 'scrivito';
import boxWidgetIcon from '../../assets/images/box_widget.svg';

Scrivito.provideEditingConfig('BoxWidget', {
  title: 'Box',
  thumbnail: `/${boxWidgetIcon}`,
  attributes: {
    useOffset: {
      title: 'Use offset?',
      description: 'If so, the box will move "up". Default: No',
      values: [
        { value: 'yes', title: 'Yes' },
        { value: 'no', title: 'No' },
      ],
    },
  },
  properties: [
    'useOffset',
  ],
  initialContent: {
    useOffset: 'no',
  },
});
