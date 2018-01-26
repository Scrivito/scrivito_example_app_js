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
  },
  properties: [
    'agreementText',
    'buttonText',
  ],
  initialContent: {
    buttonText: 'send message',
  },
});
