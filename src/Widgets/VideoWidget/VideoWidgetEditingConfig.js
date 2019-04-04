import * as Scrivito from "scrivito";
import videoWidgetIcon from "../../assets/images/video_widget.svg";

Scrivito.provideEditingConfig("VideoWidget", {
  title: "Video",
  thumbnail: videoWidgetIcon,
  attributes: {
    source: {
      title: "Video",
      description:
        "Click to select or upload video. This should be of type video/mp4.",
    },
    showText: {
      title: "Show text",
      description: "Show text to next play icon.",
      values: [{ value: "yes", title: "Yes" }, { value: "no", title: "No" }],
    },
    playText: {
      title: "Text",
      description: "The actual source code of this text",
    },
    textPosition: {
      title: "Text Position",
      description: "Place text left or right.",
      values: [
        { value: "left", title: "Left" },
        { value: "right", title: "Right" },
      ],
    },
    color: {
      title: "Color",
      description: "Play button and text color.",
      values: [
        { value: "primary", title: "Primary" },
        { value: "secondary", title: "Secondary" },
      ],
    },
    btnSize: {
      title: "Button Size",
      description: "Play button size.",
      values: [
        { value: "big", title: "Big - 80px" },
        { value: "small", title: "Small - 40px" },
      ],
    },
    poster: {
      title: "Poster image (optional)",
      description:
        "This poster image is shown, until the video is loaded." +
        " Without an poster image, the browser may show the first frame of the video.",
    },
  },
  properties: [
    "source",
    "showText",
    "playText",
    "textPosition",
    "color",
    "btnSize",
    "poster",
  ],
});
