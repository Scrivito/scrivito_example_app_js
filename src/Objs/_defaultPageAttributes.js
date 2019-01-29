const defaultPageAttributes = {
  body: ["widgetlist", { only: "SectionWidget" }],
  navigationBackgroundImage: ["reference", { only: ["Image"] }],
  navigationBackgroundImageGradient: ["enum", { values: ["yes", "no"] }],
  navigationHeight: [
    "enum",
    {
      values: ["small", "medium-height", "full-height"],
    },
  ],
  navigationSection: "widgetlist",
  title: "string",
};

export default defaultPageAttributes;
