const metadataAttributes = {
  // Meta tags
  metaDataDescription: "string",
  robotsIndex: ["enum", { values: ["yes", "no"] }],
  // Twitter attributes
  tcCreator: "string",
  tcDescription: "string",
  tcImage: ["reference", { only: ["Image"] }],
  tcTitle: "string",
  // Open Graph attributes (used by Facebook)
  ogDescription: "string",
  ogImage: ["reference", { only: ["Image"] }],
  ogTitle: "string",
};

export default metadataAttributes;
