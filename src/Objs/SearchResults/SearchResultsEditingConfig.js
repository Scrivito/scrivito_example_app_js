import * as Scrivito from "scrivito";
import SearchResultsObjIcon from "../../assets/images/search_results_obj.svg";
import {
  metadataEditingConfigAttributes,
  metadataInitialContent,
  metadataPropertiesGroup,
  socialCardsValidations,
} from "../_metadataEditingConfig";

Scrivito.provideEditingConfig("SearchResults", {
  title: "Search Results",
  thumbnail: SearchResultsObjIcon,
  hideInSelectionDialogs: true,
  attributes: {
    ...metadataEditingConfigAttributes,
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
  propertiesGroups: [
    {
      title: "Social cards",
      component: "SocialCardsTab",
      properties: ["tcCreator", "tcDescription", "ogDescription"],
    },
    metadataPropertiesGroup,
  ],
  initialContent: {
    ...metadataInitialContent,
  },
  validations: [...socialCardsValidations],
});
