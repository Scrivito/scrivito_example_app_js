import * as Scrivito from "scrivito";
import SearchResultsObjIcon from "../../assets/images/search_results_obj.svg";
import {
  metadata,
  socialCards,
  metadataEditingConfigAttributes,
  metadataInitialContent,
  metadataPropertiesGroup,
  socialCardsPropertiesGroup,
  socialCardsValidations,
} from "../_metadataEditingConfig";
import {
  defaultPage,
  defaultPageTitleValidation,
} from "../_defaultPageEditingConfig";

Scrivito.provideEditingConfig("SearchResults", {
  title: "Search Results",
  thumbnail: SearchResultsObjIcon,
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
  },
  validations: [defaultPage.titleValidation, ...socialCards.validations],
});
