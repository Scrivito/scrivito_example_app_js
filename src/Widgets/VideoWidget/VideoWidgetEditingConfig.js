import * as Scrivito from "scrivito";
import videoWidgetIcon from "../../assets/images/video_widget.svg";

Scrivito.provideEditingConfig("VideoWidget", {
  title: "Video",
  thumbnail: videoWidgetIcon,
  attributes: {
    showText: {
      title: "Play Text",
      description: "Show text to next play icon.",
      values: [{ value: "yes", title: "Yes" }, { value: "no", title: "No" }],
    },
    textPostion: {
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
        { value: "secondary", title: "Transparent Icon + White text" },
      ],
    },
    source: {
      title: "Video",
      description:
        "Click to select or upload video. This should be of type video/mp4.",
    },
    poster: {
      title: "Poster image (optional)",
      description:
        "This poster image is shown, until the video is loaded." +
        " Without an poster image, the browser may show the first frame of the video.",
    },
  },
  properties: ["source", "poster"],
});
