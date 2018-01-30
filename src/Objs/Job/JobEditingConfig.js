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
    title: {
      title: 'Job title',
      description: 'E.g. Software Engineer',
    },
    datePosted: {
      title: 'Posted at',
      description: 'The job was posted at.',
    },
    validThrough: {
      title: 'Expire at',
      description: 'Job posting will expire at.',
    },
    hiringOrganizationName: {
      title: 'Organization',
      description: 'Name of the hiring organization.',
    },
    hiringOrganizationWebsite: {
      title: 'Organization website',
      description: 'Website of the hiring organization.',
    },
    locationStreetAddress: {
      title: 'Street address',
      description: 'E.g. 655 W. 34th Street',
    },
    locationLocality: {
      title: 'Locality',
      description: 'E.g. New York',
    },
    locationRegion: {
      title: 'Region',
      description: 'E.g. NY or CA',
    },
    locationPostalCode: {
      title: 'Postal code',
      description: 'E.g. 10001',
    },
    locationCountry: {
      title: 'Country',
      description: 'E.g. USA',
    },
    employmentType: {
      title: 'Type of employment',
      values: [
        { value: 'FULL_TIME', title: 'full-time' },
        { value: 'PART_TIME', title: 'part-time' },
        { value: 'CONTRACTOR', title: 'contractor' },
        { value: 'TEMPORARY', title: 'temporary' },
        { value: 'INTERN', title: 'intern' },
        { value: 'VOLUNTEER', title: 'volunteer' },
        { value: 'PER_DIEM', title: 'per diem' },
        { value: 'OTHER', title: 'other' },
      ],
    },
  },
  properties: [
    'location',
    'image',
    'datePosted',
    'validThrough',
    'hiringOrganizationName',
    'hiringOrganizationWebsite',
    'locationName',
    'locationStreetAddress',
    'locationLocality',
    'locationRegion',
    'locationPostalCode',
    'locationCountry',
    'employmentType',
  ],
  propertiesGroups: [socialCardsPropertiesGroup, metaDataPropertiesGroup],
  initialContent: {
    ...metaDataInitialContent,
    body: [new SectionWidget({})],
  },
});
