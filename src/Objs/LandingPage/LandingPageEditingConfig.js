import * as Scrivito from "scrivito";
import landingPageObjIcon from "../../assets/images/landing_page_obj.svg";
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

Scrivito.provideEditingConfig("LandingPage", {
  title: "Landing Page",
  thumbnail: landingPageObjIcon,
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
