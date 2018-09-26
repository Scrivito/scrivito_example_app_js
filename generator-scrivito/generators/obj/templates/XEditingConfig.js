import * as Scrivito from "scrivito";
import {
  metaDataEditingConfigAttributes,
  metaDataInitialContent,
  metaDataPropertiesGroup,
} from "../_metaDataEditingConfig";

Scrivito.provideEditingConfig("<%= objClassName %>", {
  title: "<%= objClassName %>",
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
