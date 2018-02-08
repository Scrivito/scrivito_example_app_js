import * as Scrivito from 'scrivito';
import textWidgetIcon from '../../assets/images/text_widget.svg';

Scrivito.provideEditingConfig('TextWidget', {
  title: 'Text',
  thumbnail: `/${textWidgetIcon}`,
  attributes: {
    alignment: {
      title: 'Alignment',
      description: 'Default: Left',
      values: [
        { value: 'left', title: 'Left' },
        { value: 'center', title: 'Center' },
        { value: 'right', title: 'Right' },
      ],
    },
  },
  properties: [
    'alignment',
  ],
  initialContent: {
    alignment: 'left',
  },
});
