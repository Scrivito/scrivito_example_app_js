import * as Scrivito from "scrivito";
import jobObjIcon from "../../assets/images/job_obj.svg";
import SectionWidget from "../../Widgets/SectionWidget/SectionWidgetClass";
import {
  metadataEditingConfigAttributes,
  metadataInitialContent,
  metadataPropertiesGroup,
  socialCardsPropertiesGroup,
} from "../_metadataEditingConfig";

Scrivito.provideEditingConfig("Job", {
  title: "Job",
  thumbnail: jobObjIcon,
  attributes: {
    ...metadataEditingConfigAttributes,
    title: {
      title: "Job title",
      description: "E.g. Software Engineer",
    },
    image: {
      title: "Image",
    },
    datePosted: {
      title: "Posted at",
      description: "The job was posted at.",
    },
    validThrough: {
      title: "Expire at",
      description: "Job posting will expire at.",
    },
    hiringOrganizationName: {
      title: "Organization",
      description: "Name of the hiring organization.",
    },
    hiringOrganizationWebsite: {
      title: "Organization website",
      description: "E.g. http://www.example.com",
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
    employmentType: {
      title: "Type of employment",
      values: [
        { value: "FULL_TIME", title: "Full-time" },
        { value: "PART_TIME", title: "Part-time" },
        { value: "CONTRACTOR", title: "Contractor" },
        { value: "TEMPORARY", title: "Temporary" },
        { value: "INTERN", title: "Intern" },
        { value: "VOLUNTEER", title: "Volunteer" },
        { value: "PER_DIEM", title: "Per diem" },
        { value: "OTHER", title: "Other" },
      ],
    },
  },
  properties: [
    "title",
    "image",
    "datePosted",
    "validThrough",
    "hiringOrganizationName",
    "hiringOrganizationWebsite",
    "locationName",
    "locationStreetAddress",
    "locationLocality",
    "locationRegion",
    "locationPostalCode",
    "locationCountry",
    "employmentType",
  ],
  propertiesGroups: [socialCardsPropertiesGroup, metadataPropertiesGroup],
  initialContent: {
    ...metadataInitialContent,
    body: [new SectionWidget({})],
  },
});
