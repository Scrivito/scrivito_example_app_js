import * as Scrivito from "scrivito";
import imageWidgetIcon from "../../assets/images/image_widget.svg";

Scrivito.provideEditingConfig("ImageWidget", {
  title: "Image",
  thumbnail: imageWidgetIcon,
  attributes: {
    alignment: {
      title: "Alignment",
      description: "Default: Left",
      values: [
        { value: "left", title: "Left" },
        { value: "center", title: "Center" },
        { value: "right", title: "Right" },
      ],
    },
    alternativeText: {
      title: "Alternative text (optional)",
      description:
        "Brief description of what the image is about." +
        " If empty, the alternative text of the image is used.",
    },
    link: {
      title: "Link (optional)",
      description: "The link where this image should lead.",
    },
    animation: {
      title: "Animation (optional)",
      description:
        "What animation should be shown, when this image becomes visible?",
      values: [
        { value: "", title: "None" },
        { value: "left", title: "Left to center" },
        { value: "right", title: "Right to center" },
        { value: "top", title: "Top to center" },
        { value: "bottom", title: "Bottom to center" },
        { value: "zoom", title: "Zoom in" },
      ],
    },
  },
  properties: ["animation", "alignment", "alternativeText", "link"],
  initialContent: {
    alignment: "left",
  },
});
