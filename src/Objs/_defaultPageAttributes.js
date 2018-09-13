const defaultPageAttributes = {
  body: ["widgetlist", { only: "SectionWidget" }],
  navigationBackground: "reference",
  navigationBackgroundGradient: ["enum", { values: ["yes", "no"] }],
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
