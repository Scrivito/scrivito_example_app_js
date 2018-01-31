import contactFormWidgetIcon from 'assets/images/contact_form_widget.svg';

Scrivito.provideEditingConfig('ContactFormWidget', {
  title: 'Contact Form',
  thumbnail: `/${contactFormWidgetIcon}`,
  attributes: {
    agreementText: {
      title: 'Agreement text',
      description: 'Optional',
    },
    buttonText: {
      title: 'Submit button text',
      description: 'Default: send message',
    },
    isTransparent: {
      title: 'Background color',
      description: 'Default: White',
      values: [
        { value: 'no', title: 'White' },
        { value: 'yes', title: 'Transparent' },
      ],
    },
  },
  properties: [
    'agreementText',
    'buttonText',
    'isTransparent',
  ],
  initialContent: {
    buttonText: 'send message',
    isTransparent: 'no',
  },
});
