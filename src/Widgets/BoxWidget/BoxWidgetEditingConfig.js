import * as Scrivito from 'scrivito';
import boxWidgetIcon from '../../assets/images/box_widget.svg';

Scrivito.provideEditingConfig('BoxWidget', {
  title: 'Box',
  thumbnail: `/${boxWidgetIcon}`,
  attributes: {
    boxStyle: {
      title: 'Visual style of box widget',
      description: 'Different style for appearance. Default: transparent',
      values: [
        { value: 'card', title: 'white background' },
        { value: 'card-theme', title: 'transparent' },
      ],
    },
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
    'boxStyle',
    'useOffset',
  ],
  initialContent: {
    boxStyle: 'card-theme',
    useOffset: 'no',
  },
});
