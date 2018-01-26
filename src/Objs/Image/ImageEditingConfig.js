Scrivito.provideEditingConfig('Image', {
  attributes: {
    blob: {
      title: 'Image',
    },
    tags: {
      title: 'Tags',
      description: 'Make it easier to find this Image by adding some tags.',
    },
    alternativeText: {
      title: 'Alternative text',
      description: 'Brief description of what the image is about.',
    },
  },
  properties: [
    'blob',
    'alternativeText',
    'tags',
  ],
});

