import { SocialCardsTab } from "../Components/ScrivitoExtensions/SocialCardsTab";

export const metadataEditingConfigAttributes = {
  metaDataDescription: {
    title: "Page description",
    description: "Limit to 175, ideally 150 characters.",
  },
  robotsIndex: {
    title: "Should this page be indexed?",
    description: "If not, search engines will ignore this page. Default: Yes",
  },
};

export const metadataInitialContent = {
  robotsIndex: true,
};

export const metadataPropertiesGroups = [
  {
    title: "Metadata",
    properties: ["metaDataDescription", "robotsIndex"],
    key: "metadata-group",
  },
  {
    title: "Social cards",
    component: SocialCardsTab,
    properties: ["tcCreator", "tcDescription", "ogDescription"],
    key: "social-cards-group",
  },
];

export const metadataValidations = [
  [
    "metaDataDescription",

    (metaDataDescription) => {
      if (metaDataDescription && metaDataDescription.length > 175) {
        return {
          message: "The page description should not exceed 175 characters.",
          severity: "warning",
        };
      }
    },
  ],
  [
    "tcCreator",

    (tcCreator) => {
      if (tcCreator && tcCreator.charAt(0) !== "@") {
        return {
          message: "The creator should start with @.",
          severity: "warning",
        };
      }
    },
  ],
  [
    "tcDescription",

    (tcDescription) => {
      if (tcDescription && tcDescription.length > 200) {
        return {
          message: "The Twitter description should not exceed 200 characters.",
          severity: "warning",
        };
      }
    },
  ],
  [
    "ogDescription",

    (ogDescription) => {
      if (ogDescription && ogDescription.length > 300) {
        return {
          message: "The Facebook description should not exceed 300 characters.",
          severity: "warning",
        };
      }
    },
  ],
];
