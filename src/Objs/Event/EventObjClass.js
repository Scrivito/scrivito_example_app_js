import * as Scrivito from "scrivito";
import { registerTextExtract } from "../../utils/textExtractRegistry";
import metadataAttributes from "../_metadataAttributes";

const Event = Scrivito.provideObjClass("Event", {
  attributes: {
    body: ["widgetlist", { only: "SectionWidget" }],
    date: "date",
    image: ["reference", { only: ["Image"] }],
    locationName: "string",
    locationStreetAddress: "string",
    locationLocality: "string",
    locationPostalCode: "string",
    locationRegion: "string",
    locationCountry: "string",
    title: "string",
    tags: "stringlist",
    ...metadataAttributes,
  },
});

registerTextExtract("Event", [
  { attribute: "locationName", type: "string" },
  { attribute: "locationLocality", type: "string" },
  { attribute: "locationCountry", type: "string" },
  { attribute: "body", type: "widgetlist" },
]);

export default Event;
