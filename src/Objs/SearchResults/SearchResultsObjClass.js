import * as Scrivito from 'scrivito';
import metaDataAttributes from '../_metaDataAttributes';

const SearchResults = Scrivito.provideObjClass('SearchResults', {
  attributes: {
    title: 'string',
    navigationBackgroundImage: 'reference',
    ...metaDataAttributes,
  },
});

export default SearchResults;
