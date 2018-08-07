function dataFromAddressWidget(addressWidget) {
  return {
    "@type": "Place",
    name: addressWidget.get("locationName"),
    address: addressFromAddressWidget(addressWidget),
    telephone: addressWidget.get("phone"),
    faxNumber: addressWidget.get("fax"),
  };
}

function addressFromAddressWidget(addressWidget) {
  return {
    "@type": "PostalAddress",
    streetAddress: addressWidget.get("locationStreetAddress"),
    addressLocality: addressWidget.get("locationLocality"),
    addressRegion: addressWidget.get("locationRegion"),
    postalCode: addressWidget.get("locationPostalCode"),
    addressCountry: addressWidget.get("locationCountry"),
  };
}

export default dataFromAddressWidget;
