const metaDataEditingConfigAttributes = {
  metaDataDescription: {
    title: 'Page description',
    description: 'Limit to 175, ideally 150 characters.',
  },
  robotsIndex: {
    title: 'Should this page be indexed?',
    description: 'If not, search engines will ignore this page. Default: Yes',
    values: [
      { value: 'yes', title: 'Yes' },
      { value: 'no', title: 'No' },
    ],
  },
};

const metaDataInitialContent = {
  robotsIndex: 'yes',
};

const metaDataPropertiesGroup = {
  title: 'Meta data',
  properties: [
    'metaDataDescription',
    'robotsIndex',
  ],
};

const socialCardsPropertiesGroup = {
  title: 'Social cards',
  component: 'SocialCardsTab',
};

export {
  metaDataEditingConfigAttributes,
  metaDataInitialContent,
  metaDataPropertiesGroup,
  socialCardsPropertiesGroup,
};
