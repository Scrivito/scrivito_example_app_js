import * as Scrivito from "scrivito";
import PageObjIcon from "../../assets/images/page_obj.svg";
import {
  defaultPageEditingConfigAttributes,
  defaultPageInitialContent,
  defaultPageProperties,
} from "../_defaultPageEditingConfig";
import {
  metadataEditingConfigAttributes,
  metadataInitialContent,
  metadataPropertiesGroup,
  socialCardsValidations,
} from "../_metadataEditingConfig";

Scrivito.provideEditingConfig("Page", {
  title: "Page",
  thumbnail: PageObjIcon,
  attributes: {
    ...defaultPageEditingConfigAttributes,
    ...metadataEditingConfigAttributes,
  },
  properties: [...defaultPageProperties],
  propertiesGroups: [
    {
      title: "Social cards",
      component: "SocialCardsTab",
      properties: ["tcCreator", "tcDescription", "ogDescription"],
    },
    metadataPropertiesGroup,
  ],
  initialContent: {
    ...defaultPageInitialContent,
    ...metadataInitialContent,
  },
  validations: [...socialCardsValidations],
});
