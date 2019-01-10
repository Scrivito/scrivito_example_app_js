import * as Scrivito from "scrivito";
import authorObjIcon from "../../assets/images/author_obj.svg";
import {
  metadataEditingConfigAttributes,
  metadataInitialContent,
  metadataPropertiesGroup,
  socialCardsPropertiesGroup,
} from "../_metadataEditingConfig";

Scrivito.provideEditingConfig("Author", {
  title: "Author",
  thumbnail: authorObjIcon,
  attributes: {
    ...metadataEditingConfigAttributes,
    title: {
      title: "Name",
    },
    description: {
      title: "Description",
    },
    image: {
      title: "Image",
    },
  },
  properties: ["title", "description", "image"],
  propertiesGroups: [socialCardsPropertiesGroup, metadataPropertiesGroup],
  initialContent: {
    ...metadataInitialContent,
  },
});
