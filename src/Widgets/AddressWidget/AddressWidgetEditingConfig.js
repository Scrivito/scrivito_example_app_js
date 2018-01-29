import addressWidgetIcon from 'assets/images/address_widget.svg';
import AddressListItemWidget from 'Widgets/AddressListItemWidget/AddressListItemWidgetClass';

Scrivito.provideEditingConfig('AddressWidget', {
  title: 'Address',
  thumbnail: `/${addressWidgetIcon}`,
  attributes: {
    listItems: {
      title: 'Address list items',
      description: 'E.g. phone numbers.',
    },
    showBorderBottom: {
      title: 'Show border at the bottom?',
      description: 'Default: No',
      values: [
        { value: 'yes', title: 'Yes' },
        { value: 'no', title: 'No' },
      ],
    },
    showLogo: {
      title: 'Show brand logo?',
      description: 'Default: Yes',
      values: [
        { value: 'yes', title: 'Yes' },
        { value: 'no', title: 'No' },
      ],
    },
  },
  properties: [
    'showLogo',
    'listItems',
    'showBorderBottom',
  ],
  initialContent: {
    address: 'The actual address.',
    listItems: [new AddressListItemWidget({})],
    showBorderBottom: 'no',
    showLogo: 'yes',
  },
});
