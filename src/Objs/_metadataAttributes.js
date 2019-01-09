const metadataAttributes = {
  // Meta tags
  metadataDescription: "string",
  robotsIndex: ["enum", { values: ["yes", "no"] }],
  // Twitter attributes
  tcCreator: "string",
  tcDescription: "string",
  tcImage: "reference",
  tcTitle: "string",
  // Open Graph attributes (used by Facebook)
  ogDescription: "string",
  ogImage: "reference",
  ogTitle: "string",
};

export default metadataAttributes;
