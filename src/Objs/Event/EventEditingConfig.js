import * as Scrivito from "scrivito";
import eventObjIcon from "../../assets/images/event_obj.svg";
import SectionWidget from "../../Widgets/SectionWidget/SectionWidgetClass";
import {
  metadataEditingConfigAttributes,
  metadataInitialContent,
  metadataPropertiesGroup,
  socialCardsPropertiesGroup,
} from "../_metadataEditingConfig";

Scrivito.provideEditingConfig("Event", {
  title: "Event",
  thumbnail: eventObjIcon,
  attributes: {
    ...metadataEditingConfigAttributes,
    date: {
      title: "Date",
      description: "When is this event happening?",
    },
    image: {
      title: "Image",
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
    title: {
      title: "Title",
      description: "Limit to 55 characters.",
    },
    tags: {
      title: "Tags",
      description: "Which tags can be associated with this event?",
    },
  },
  properties: [
    "title",
    "date",
    "locationName",
    "locationStreetAddress",
    "locationLocality",
    "locationRegion",
    "locationPostalCode",
    "locationCountry",
    "image",
    "tags",
  ],
  propertiesGroups: [socialCardsPropertiesGroup, metadataPropertiesGroup],
  initialContent: {
    ...metadataInitialContent,
    body: [new SectionWidget({})],
  },
});
