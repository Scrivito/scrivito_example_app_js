import * as Scrivito from "scrivito";
import blogObjIcon from "../../assets/images/blog_obj.svg";
import SectionWidget from "../../Widgets/SectionWidget/SectionWidgetClass";
import { metadata, socialCards } from "../_metadataEditingConfig";

Scrivito.provideEditingConfig("Blog", {
  title: "Blog",
  thumbnail: blogObjIcon,
  hideInSelectionDialogs: true,
  attributes: {
    ...metadata.editingConfigAttributes,
    title: {
      title: "Title",
      description: "Limit to 55 characters.",
    },
    navigationBackgroundImage: {
      title: "Header image",
      description: "The background image of the header.",
    },
  },
  properties: ["title", "navigationBackgroundImage"],
  propertiesGroups: [socialCards.propertiesGroup, metadata.propertiesGroup],
  initialContent: {
    ...metadata.initialContent,
    body: [new SectionWidget({})],
  },
  validations: [...socialCards.validations],
});
