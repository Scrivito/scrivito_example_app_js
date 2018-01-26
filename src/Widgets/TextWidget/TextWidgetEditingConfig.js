import textWidgetIcon from 'assets/images/text_widget.svg';

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
    text: {
      title: 'Text',
      description: 'The actual source code of this text',
    },
  },
  properties: [
    'alignment',
    'text',
  ],
  initialContent: {
    alignment: 'left',
  },
});
