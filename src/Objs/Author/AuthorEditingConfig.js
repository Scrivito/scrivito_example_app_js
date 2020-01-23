import * as Scrivito from "scrivito";
import authorObjIcon from "../../assets/images/author_obj.svg";
import {
  metadata,
  socialCards,
  metadataEditingConfigAttributes,
  metadataInitialContent,
  metadataPropertiesGroup,
  socialCardsPropertiesGroup,
  socialCardsValidations,
} from "../_metadataEditingConfig";

Scrivito.provideEditingConfig("Author", {
  title: "Author",
  thumbnail: authorObjIcon,
  attributes: {
    ...metadata.editingConfigAttributes,
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
  propertiesGroups: [socialCards.propertiesGroup, metadata.propertiesGroup],
  initialContent: {
    ...metadata.initialContent,
    title: "Lorem Ipsum",
  },
  validations: [
    ...socialCards.validations,
    [
      "title",

      title => {
        if (!title) {
          return { message: "The name must be set.", severity: "error" };
        }
      },
    ],
  ],
});
