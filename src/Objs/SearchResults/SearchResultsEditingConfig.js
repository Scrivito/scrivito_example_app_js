import * as Scrivito from 'scrivito';
import SearchResultsObjIcon from '../../assets/images/search_results_obj.svg';
import {
  metaDataEditingConfigAttributes,
  metaDataInitialContent,
  metaDataPropertiesGroup,
  socialCardsPropertiesGroup,
} from '../_metaDataEditingConfig';

Scrivito.provideEditingConfig('SearchResults', {
  title: 'Search Results',
  thumbnail: `/${SearchResultsObjIcon}`,
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
  },
});
