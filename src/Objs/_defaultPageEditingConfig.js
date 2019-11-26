import HeadlineWidget from "../Widgets/HeadlineWidget/HeadlineWidgetClass";
import SectionWidget from "../Widgets/SectionWidget/SectionWidgetClass";

export const defaultPageEditingConfigAttributes = {
  title: {
    title: "Title",
    description: "Limit to 55 characters.",
  },
  navigationBackgroundImage: {
    title: "Header background",
    description: "The background image/video of the header.",
  },
  navigationBackgroundImageGradient: {
    title: "Use gradient for header image?",
    description: "Only applies if a header image is selected. Default: No",
    values: [
      { value: "yes", title: "Yes" },
      { value: "no", title: "No" },
    ],
  },
  navigationHeight: {
    title: "Header height",
    description: "Default: Small",
    values: [
      { value: "small", title: "Small" },
      { value: "medium-height", title: "Medium" },
      { value: "full-height", title: "Fullscreen" },
    ],
  },
};

export const defaultPageInitialContent = {
  body: [
    new SectionWidget({
      content: [new HeadlineWidget({ style: "h1" })],
    }),
  ],
  navigationHeight: "small",
  navigationBackgroundImageGradient: "no",
};

export const defaultPageProperties = [
  "title",
  "navigationHeight",
  "navigationBackgroundImage",
  "navigationBackgroundImageGradient",
];
