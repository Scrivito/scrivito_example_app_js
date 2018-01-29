import authorObjIcon from 'assets/images/author_obj.svg';
import {
  metaDataEditingConfigAttributes,
  metaDataInitialContent,
  metaDataPropertiesGroup,
  socialCardsPropertiesGroup,
} from '../_metaDataEditingConfig';

Scrivito.provideEditingConfig('Author', {
  title: 'Author',
  thumbnail: `/${authorObjIcon}`,
  attributes: {
    ...metaDataEditingConfigAttributes,
    image: {
      title: 'Image',
    },
  },
  properties: [
    'image',
  ],
  propertiesGroups: [socialCardsPropertiesGroup, metaDataPropertiesGroup],
  initialContent: {
    ...metaDataInitialContent,
  },
});
