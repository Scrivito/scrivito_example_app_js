import * as Scrivito from "scrivito";
import PageObjIcon from "../../assets/images/page_obj.svg";
import {
  defaultPageEditingConfigAttributes,
  defaultPageInitialContent,
  defaultPageProperties,
  defaultPageTitleValidation,
} from "../_defaultPageEditingConfig";
import {
  metadataEditingConfigAttributes,
  metadataInitialContent,
  metadataPropertiesGroup,
  socialCardsPropertiesGroup,
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
  propertiesGroups: [socialCardsPropertiesGroup, metadataPropertiesGroup],
  initialContent: {
    ...defaultPageInitialContent,
    ...metadataInitialContent,
  },
  validations: [defaultPageTitleValidation, ...socialCardsValidations],
});
