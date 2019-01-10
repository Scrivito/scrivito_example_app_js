const metadataEditingConfigAttributes = {
  metaDataDescription: {
    title: "Page description",
    description: "Limit to 175, ideally 150 characters.",
  },
  robotsIndex: {
    title: "Should this page be indexed?",
    description: "If not, search engines will ignore this page. Default: Yes",
    values: [{ value: "yes", title: "Yes" }, { value: "no", title: "No" }],
  },
};

const metadataInitialContent = {
  robotsIndex: "yes",
};

const metadataPropertiesGroup = {
  title: "Metadata",
  properties: ["metaDataDescription", "robotsIndex"],
};

const socialCardsPropertiesGroup = {
  title: "Social cards",
  component: "SocialCardsTab",
};

export {
  metadataEditingConfigAttributes,
  metadataInitialContent,
  metadataPropertiesGroup,
  socialCardsPropertiesGroup,
};
