import HeadlineWidget from "../Widgets/HeadlineWidget/HeadlineWidgetClass";
import SectionWidget from "../Widgets/SectionWidget/SectionWidgetClass";

const defaultPageEditingConfigAttributes = {
  title: {
    title: "Title",
    description: "Limit to 55 characters.",
  },
  navigationBackground: {
    title: "Header background",
    description:
      "The background image or video of the header. For video only mp4 format is supported",
  },
  navigationBackgroundGradient: {
    title: "Use gradient for header background?",
    description: "Only applies if a header background is selected. Default: No",
    values: [{ value: "yes", title: "Yes" }, { value: "no", title: "No" }],
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

const defaultPageInitialContent = {
  body: [
    new SectionWidget({
      content: [new HeadlineWidget({ style: "h1" })],
    }),
  ],
  navigationHeight: "small",
  navigationBackgroundImageGradient: "no",
};

const defaultPageProperties = [
  "title",
  "navigationHeight",
  "navigationBackground",
  "navigationBackgroundGradient",
];

export {
  defaultPageEditingConfigAttributes,
  defaultPageInitialContent,
  defaultPageProperties,
};
