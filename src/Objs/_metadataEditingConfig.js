export const metadataEditingConfigAttributes = {
  metaDataDescription: {
    title: "Page description",
    description: "Limit to 175, ideally 150 characters.",
  },
  robotsIndex: {
    title: "Should this page be indexed?",
    description: "If not, search engines will ignore this page. Default: Yes",
    values: [
      { value: "yes", title: "Yes" },
      { value: "no", title: "No" },
    ],
  },
};

export const metadataInitialContent = {
  robotsIndex: "yes",
};

export const metadataPropertiesGroup = {
  title: "Metadata",
  properties: ["metaDataDescription", "robotsIndex"],
};

export const socialCardsPropertiesGroup = {
  title: "Social cards",
  component: "SocialCardsTab",
  properties: ["tcCreator", "tcDescription", "ogDescription"],
};

export const socialCardsValidations = [
  [
    "tcCreator",

    tcCreator => {
      if (tcCreator && tcCreator.charAt(0) !== "@") {
        return {
          message: "Creator should start with @",
          severity: "warning",
        };
      }
    },
  ],
  [
    "tcDescription",

    tcDescription => {
      if (tcDescription && tcDescription.length > 200) {
        return {
          message: "Description shouldn't exceed 200 characters.",
          severity: "warning",
        };
      }
    },
  ],
  [
    "ogDescription",

    ogDescription => {
      if (ogDescription && ogDescription.length > 300) {
        return {
          message: "Description shouldn't exceed 300 characters.",
          severity: "warning",
        };
      }
    },
  ],
];
