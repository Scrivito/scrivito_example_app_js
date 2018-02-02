import { registerTextExtract } from 'utils/textExtractRegistry';

const AddressWidget = Scrivito.provideWidgetClass('AddressWidget', {
  attributes: {
    showLogo: ['enum', { values: ['yes', 'no'] }],
    showBorderBottom: ['enum', { values: ['yes', 'no'] }],

    locationName: 'string',
    locationStreetAddress: 'string',
    locationLocality: 'string',
    locationPostalCode: 'string',
    locationRegion: 'string',
    locationCountry: 'string',

    phone: 'string',
    mobile: 'string',
    fax: 'string',
    eMail: 'string',
  },
});

registerTextExtract('AddressWidget', [
]);

export default AddressWidget;
