import * as Scrivito from "scrivito";

const AddressWidget = Scrivito.provideWidgetClass("AddressWidget", {
  attributes: {
    showLogo: ["enum", { values: ["yes", "no"] }],
    showBorderBottom: ["enum", { values: ["yes", "no"] }],

    locationName: "string",
    locationStreetAddress: "string",
    locationLocality: "string",
    locationPostalCode: "string",
    locationRegion: "string",
    locationCountry: "string",
    addressFormat: ["enum", { values: ["USA", "GER"] }],

    phone: "string",
    fax: "string",
    email: "string",
  },
  extractTextAttributes: [
    "locationName",
    "locationStreetAddress",
    "locationLocality",
    "locationPostalCode",
    "locationRegion",
    "locationCountry",
    "phone",
    "fax",
    "email",
  ],
});

export default AddressWidget;
