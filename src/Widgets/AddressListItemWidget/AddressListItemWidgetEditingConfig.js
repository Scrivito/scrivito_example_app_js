import textExtractFromHtml from 'utils/textExtractFromHtml';
import truncate from 'lodash/truncate';

Scrivito.provideEditingConfig('AddressListItemWidget', {
  title: 'Address List Item',
  attributes: {
    key: {
      title: 'Key',
      description: 'E.g. Phone:',
    },
    value: {
      title: 'Value',
      description: 'E.g. <a href="tel:+8001233567">800 123 3567</a>',
    },
  },
  properties: [
    'key',
    'value',
  ],
  initialContent: {
    key: 'Phone:',
    value: '<a href="tel:+8001233567">800 123 3567</a>',
  },
  titleForContent:
    widget => `${widget.get('key')} ${truncate(textExtractFromHtml(widget.get('value')))}`,
});
