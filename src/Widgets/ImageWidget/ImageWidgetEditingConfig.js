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
      description: "The page to open after clicking the image.",
    },
    animation: {
      title: "Animation",
      description:
        "The animation to perform as this image becomes visible. Default: None",
      values: [
        { value: "none", title: "None" },
        { value: "fadeInLeft", title: "Left to center" },
        { value: "fadeInRight", title: "Right to center" },
        { value: "fadeInDown", title: "Top to center" },
        { value: "fadeInUp", title: "Bottom to center" },
        { value: "zoomIn", title: "Zoom in" },
      ],
    },
  },
  properties: ["animation", "alignment", "alternativeText", "link"],
  initialContent: {
    alignment: "left",
    animation: "none",
  },
});
