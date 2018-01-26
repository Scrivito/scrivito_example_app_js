import { registerTextExtract } from 'utils/textExtractRegistry';

const AddressListItemWidget = Scrivito.provideWidgetClass('AddressListItemWidget', {
  onlyInside: 'AddressWidget',
  attributes: {
    key: 'string',
    value: 'html',
  },
});

registerTextExtract('AddressListItemWidget', [
  { attribute: 'key', type: 'string' },
  { attribute: 'value', type: 'html' },
]);

export default AddressListItemWidget;
