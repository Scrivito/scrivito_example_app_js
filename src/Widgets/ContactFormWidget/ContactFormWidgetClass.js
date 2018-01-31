const ContactFormWidget = Scrivito.provideWidgetClass('ContactFormWidget', {
  attributes: {
    agreementText: 'string',
    buttonText: 'string',
    isTransparent: ['enum', { values: ['yes', 'no'] }],
  },
});

export default ContactFormWidget;
