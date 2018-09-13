import * as Scrivito from "scrivito";
import blogObjIcon from "../../assets/images/blog_obj.svg";
import SectionWidget from "../../Widgets/SectionWidget/SectionWidgetClass";
import {
  metaDataEditingConfigAttributes,
  metaDataInitialContent,
  metaDataPropertiesGroup,
  socialCardsPropertiesGroup,
} from "../_metaDataEditingConfig";

Scrivito.provideEditingConfig("Blog", {
  title: "Blog",
  thumbnail: blogObjIcon,
  hideInSelectionDialogs: true,
  attributes: {
    ...metaDataEditingConfigAttributes,
    title: {
      title: "Title",
      description: "Limit to 55 characters.",
    },
    navigationBackground: {
      title: "Header background",
      description:
        "The background image or video of the header. For video only mp4 format is supported",
    },
  },
  properties: ["title", "navigationBackground"],
  propertiesGroups: [socialCardsPropertiesGroup, metaDataPropertiesGroup],
  initialContent: {
    ...metaDataInitialContent,
    body: [new SectionWidget({})],
  },
});
