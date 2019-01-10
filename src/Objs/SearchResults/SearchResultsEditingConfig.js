import * as Scrivito from "scrivito";
import SearchResultsObjIcon from "../../assets/images/search_results_obj.svg";
import {
  metadataEditingConfigAttributes,
  metadataInitialContent,
  metadataPropertiesGroup,
  socialCardsPropertiesGroup,
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
  propertiesGroups: [socialCardsPropertiesGroup, metadataPropertiesGroup],
  initialContent: {
    ...metadataInitialContent,
  },
});
