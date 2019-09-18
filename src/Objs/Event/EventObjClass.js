import * as Scrivito from "scrivito";
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
  extractTextAttributes: [
    "locationName",
    "locationLocality",
    "locationCountry",
    "body",
  ],
});

export default Event;
