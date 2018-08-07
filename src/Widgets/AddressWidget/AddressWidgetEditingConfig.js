import * as Scrivito from "scrivito";
import addressWidgetIcon from "../../assets/images/address_widget.svg";

Scrivito.provideEditingConfig("AddressWidget", {
  title: "Address",
  thumbnail: addressWidgetIcon,
  attributes: {
    showBorderBottom: {
      title: "Show border at the bottom?",
      description: "Default: No",
      values: [{ value: "yes", title: "Yes" }, { value: "no", title: "No" }],
    },
    showLogo: {
      title: "Show brand logo?",
      description: "Default: Yes",
      values: [{ value: "yes", title: "Yes" }, { value: "no", title: "No" }],
    },
    locationName: {
      title: "Location name",
      description: "E.g. New York Convention Center",
    },
    locationStreetAddress: {
      title: "Street address",
      description: "E.g. 655 W. 34th Street",
    },
    locationLocality: {
      title: "Locality",
      description: "E.g. New York",
    },
    locationRegion: {
      title: "Region",
      description: "E.g. NY or CA",
    },
    locationPostalCode: {
      title: "Postal code",
      description: "E.g. 10001",
    },
    locationCountry: {
      title: "Country",
      description: "E.g. USA",
    },
    addressFormat: {
      title: "Address format",
      description: "Default: USA",
      values: [
        { value: "USA", title: "USA" },
        { value: "GER", title: "Germany" },
      ],
    },
    phone: {
      title: "Phone",
    },
    fax: {
      title: "Fax",
    },
    email: {
      title: "Email",
    },
  },
  properties: [
    "showLogo",
    "locationName",
    "locationStreetAddress",
    "locationLocality",
    "locationPostalCode",
    "locationRegion",
    "locationCountry",
    "addressFormat",
    "phone",
    "fax",
    "email",
    "showBorderBottom",
  ],
  initialContent: {
    showBorderBottom: "no",
    showLogo: "yes",
    addressFormat: "USA",
  },
});
