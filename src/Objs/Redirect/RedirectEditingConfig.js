import * as Scrivito from 'scrivito';
import redirectObjIcon from '../../assets/images/redirect_obj.png';

Scrivito.provideEditingConfig('Redirect', {
  title: 'Redirect',
  thumbnail: `/${redirectObjIcon}`,
  attributes: {
    link: {
      title: 'Link',
    },
    openUi: {
      title: 'Open UI?',
      description: 'If no link is set, should the Scrivito UI be opened? Default: No',
      values: [
        { value: 'yes', title: 'Yes' },
        { value: 'no', title: 'No' },
      ],
    },
  },
  properties: [
    'link',
    'openUi',
  ],
  initialContent: {
    openUi: 'no',
  },
});
