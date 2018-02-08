import * as Scrivito from 'scrivito';
import PageObjIcon from '../../assets/images/page_obj.svg';
import {
  defaultPageEditingConfigAttributes,
  defaultPageInitialContent,
  defaultPageProperties,
} from '../_defaultPageEditingConfig';
import {
  metaDataEditingConfigAttributes,
  metaDataInitialContent,
  metaDataPropertiesGroup,
  socialCardsPropertiesGroup,
} from '../_metaDataEditingConfig';

Scrivito.provideEditingConfig('Page', {
  title: 'Page',
  thumbnail: `/${PageObjIcon}`,
  attributes: {
    ...defaultPageEditingConfigAttributes,
    ...metaDataEditingConfigAttributes,
  },
  properties: [
    ...defaultPageProperties,
  ],
  propertiesGroups: [socialCardsPropertiesGroup, metaDataPropertiesGroup],
  initialContent: {
    ...defaultPageInitialContent,
    ...metaDataInitialContent,
  },
});
