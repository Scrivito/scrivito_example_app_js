import * as Scrivito from 'scrivito';
import authorObjIcon from '../../assets/images/author_obj.svg';
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
  },
  propertiesGroups: [socialCardsPropertiesGroup, metaDataPropertiesGroup],
  initialContent: {
    ...metaDataInitialContent,
  },
});
