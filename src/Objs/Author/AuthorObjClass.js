import * as Scrivito from 'scrivito';
import { registerTextExtract } from '../../utils/textExtractRegistry';
import metaDataAttributes from '../_metaDataAttributes';

const Author = Scrivito.provideObjClass('Author', {
  attributes: {
    title: 'string',
    description: 'string',
    image: 'reference',
    ...metaDataAttributes,
  },
});

registerTextExtract('Author', [
  { attribute: 'description', type: 'string' },
]);

export default Author;
