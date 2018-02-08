import * as Scrivito from 'scrivito';
import imageWidgetIcon from '../../assets/images/image_widget.svg';

Scrivito.provideEditingConfig('ImageWidget', {
  title: 'Image',
  thumbnail: `/${imageWidgetIcon}`,
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
    alternativeText: {
      title: 'Alternative text (optional)',
      description: 'Brief description of what the image is about.' +
        ' If empty, the alternative text of the image is used.',
    },
    link: {
      title: 'Link (optional)',
      description: 'The link where this image should lead.',
    },
  },
  properties: [
    'alignment',
    'alternativeText',
    'link',
  ],
  initialContent: {
    alignment: 'left',
  },
});
