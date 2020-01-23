import * as Scrivito from "scrivito";
import landingPageObjIcon from "../../assets/images/landing_page_obj.svg";
import { defaultPage } from "../_defaultPageEditingConfig";
import { metadata, socialCards } from "../_metadataEditingConfig";

Scrivito.provideEditingConfig("LandingPage", {
  title: "Landing Page",
  thumbnail: landingPageObjIcon,
  attributes: {
    ...defaultPage.editingConfigAttributes,
    ...metadata.editingConfigAttributes,
  },
  properties: [...defaultPage.properties],
  propertiesGroups: [socialCards.propertiesGroup, metadata.propertiesGroup],
  initialContent: {
    ...defaultPage.initialContent,
    ...metadata.initialContent,
  },
  validations: [defaultPage.titleValidation, ...socialCards.validations],
});
