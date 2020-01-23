import * as Scrivito from "scrivito";
import PageObjIcon from "../../assets/images/page_obj.svg";
import { defaultPage } from "../_defaultPageEditingConfig";
import { metadata, socialCards } from "../_metadataEditingConfig";

Scrivito.provideEditingConfig("Page", {
  title: "Page",
  thumbnail: PageObjIcon,
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
