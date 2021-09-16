import * as Scrivito from "scrivito";
import authorObjIcon from "../../assets/images/author_obj.svg";
import {
  metadataEditingConfigAttributes,
  metadataInitialContent,
  metadataPropertiesGroups,
  metadataValidations,
} from "../_metadataEditingConfig";

Scrivito.provideEditingConfig("Author", {
  title: "Author",
  thumbnail: authorObjIcon,
  thumbnailForContent: (obj) => obj.get("image"),
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
  propertiesGroups: [...metadataPropertiesGroups],
  initialContent: {
    ...metadataInitialContent,
    title: "Lorem Ipsum",
  },
  validations: [
    ...metadataValidations,
    [
      "title",

      (title) => {
        if (!title) {
          return { message: "The name must be set.", severity: "error" };
        }
      },
    ],
  ],
});
