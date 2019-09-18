import * as Scrivito from "scrivito";
import metadataAttributes from "../_metadataAttributes";

const Job = Scrivito.provideObjClass("Job", {
  attributes: {
    body: ["widgetlist", { only: "SectionWidget" }],
    image: ["reference", { only: ["Image"] }],
    title: "string",

    datePosted: "date",
    validThrough: "date",

    hiringOrganizationName: "string",
    hiringOrganizationWebsite: "string",

    locationStreetAddress: "string",
    locationLocality: "string",
    locationRegion: "string",
    locationPostalCode: "string",
    locationCountry: "string",

    employmentType: [
      "multienum",
      {
        values: [
          "FULL_TIME",
          "PART_TIME",
          "CONTRACTOR",
          "TEMPORARY",
          "INTERN",
          "VOLUNTEER",
          "PER_DIEM",
          "OTHER",
        ],
      },
    ],

    ...metadataAttributes,
  },
  extractTextAttributes: ["body"],
});

export default Job;
