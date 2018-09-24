import * as Scrivito from "scrivito";
import {
  metaDataEditingConfigAttributes,
  metaDataInitialContent,
  metaDataPropertiesGroup,
} from "../_metaDataEditingConfig";

Scrivito.provideEditingConfig("<%= nameUpper %>", {
  title: "<%= nameUpper %>",
  attributes: {
    title: {
      title: "Name",
    },
  },
  properties: ["title", "description", "image"],
  propertiesGroups: [metaDataPropertiesGroup],
  initialContent: {
    ...metaDataInitialContent,
  },
});
