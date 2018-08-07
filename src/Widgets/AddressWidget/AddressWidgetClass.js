import * as Scrivito from "scrivito";
import { registerTextExtract } from "../../utils/textExtractRegistry";

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
});

registerTextExtract("AddressWidget", [
  { attribute: "locationName", type: "string" },
  { attribute: "locationStreetAddress", type: "string" },
  { attribute: "locationLocality", type: "string" },
  { attribute: "locationPostalCode", type: "string" },
  { attribute: "locationRegion", type: "string" },
  { attribute: "locationCountry", type: "string" },
  { attribute: "phone", type: "string" },
  { attribute: "fax", type: "string" },
  { attribute: "email", type: "string" },
]);

export default AddressWidget;
