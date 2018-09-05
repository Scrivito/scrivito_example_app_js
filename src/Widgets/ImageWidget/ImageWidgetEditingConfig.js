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
      description: "Animation effect that will be added to the photo",
      values: [
        { value: "", title: "None" },
        { value: "fade-right", title: "Left to center" },
        { value: "fade-left", title: "Right to center" },
        { value: "fade-down", title: "Top to center" },
        { value: "fade-up", title: "Bottom to center" },
        { value: "zoom-in", title: "Zoom in" },
      ],
    },
  },
  properties: ["alignment", "alternativeText", "link", "animation"],
  initialContent: {
    alignment: "left",
    animation: "",
  },
});
