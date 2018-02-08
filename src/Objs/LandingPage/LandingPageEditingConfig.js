import * as Scrivito from 'scrivito';
import landingPageObjIcon from '../../assets/images/landing_page_obj.svg';
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

Scrivito.provideEditingConfig('LandingPage', {
  title: 'Landing Page',
  thumbnail: `/${landingPageObjIcon}`,
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
