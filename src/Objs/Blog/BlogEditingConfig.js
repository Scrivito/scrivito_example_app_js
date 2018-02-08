import * as Scrivito from 'scrivito';
import blogObjIcon from '../../assets/images/blog_obj.svg';
import SectionWidget from '../../Widgets/SectionWidget/SectionWidgetClass';
import {
  metaDataEditingConfigAttributes,
  metaDataInitialContent,
  metaDataPropertiesGroup,
  socialCardsPropertiesGroup,
} from '../_metaDataEditingConfig';

Scrivito.provideEditingConfig('Blog', {
  title: 'Blog',
  thumbnail: `/${blogObjIcon}`,
  hideInSelectionDialogs: true,
  attributes: {
    ...metaDataEditingConfigAttributes,
    title: {
      title: 'Title',
      description: 'Limit to 55 characters.',
    },
    navigationBackgroundImage: {
      title: 'Header image',
      description: 'The background image of the header.',
    },
  },
  properties: [
    'title',
    'navigationBackgroundImage',
  ],
  propertiesGroups: [socialCardsPropertiesGroup, metaDataPropertiesGroup],
  initialContent: {
    ...metaDataInitialContent,
    body: [new SectionWidget({})],
  },
});
