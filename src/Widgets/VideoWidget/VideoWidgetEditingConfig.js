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
    poster: {
      title: "Poster image (optional)",
      description:
        "This poster image is shown, until the video is loaded." +
        " Without an poster image, the browser may show the first frame of the video.",
    },
  },
  properties: ["source", "poster"],
});
