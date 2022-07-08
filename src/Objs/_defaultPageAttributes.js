export const defaultPageAttributes = {
  body: ["widgetlist", { only: "SectionWidget" }],
  navigationBackgroundImage: ["reference", { only: ["Image", "Video"] }],
  navigationBackgroundImageGradient: "boolean",
  navigationHeight: [
    "enum",
    {
      values: ["small", "medium-height", "full-height"],
    },
  ],
  navigationSection: "widgetlist",
  title: "string",
};
