import * as Scrivito from 'scrivito';
import jobObjIcon from 'assets/images/job_obj.svg';
import SectionWidget from 'Widgets/SectionWidget/SectionWidgetClass';
import {
  metaDataEditingConfigAttributes,
  metaDataInitialContent,
  metaDataPropertiesGroup,
  socialCardsPropertiesGroup,
} from '../_metaDataEditingConfig';

Scrivito.provideEditingConfig('Job', {
  title: 'Job',
  thumbnail: `/${jobObjIcon}`,
  attributes: {
    ...metaDataEditingConfigAttributes,
    image: {
      title: 'Image',
    },
    location: {
      title: 'Location',
      description: 'Where is this job located?',
    },
  },
  properties: [
    'location',
    'image',
  ],
  propertiesGroups: [socialCardsPropertiesGroup, metaDataPropertiesGroup],
  initialContent: {
    ...metaDataInitialContent,
    body: [new SectionWidget({})],
  },
});
