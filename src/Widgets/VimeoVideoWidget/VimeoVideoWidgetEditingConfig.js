import * as Scrivito from "scrivito";
import vimeoVideoWidgetIcon from "../../assets/images/vimeo_video_widget.svg";

Scrivito.provideEditingConfig("VimeoVideoWidget", {
  title: "Vimeo Video",
  thumbnail: vimeoVideoWidgetIcon,
  attributes: {
    vimeoVideoId: {
      title: "Vimeo video ID",
      description:
        "Every video at Vimeo has a unique identifier that consists of a series" +
        " of digits. In the video URL, the ID usually is the value at the end," +
        " e.g. 15069551 in https://vimeo.com/15069551.",
    },
    aspectRatio: {
      title: "Aspect ratio",
      description: "Default: HD TV (16:9)",
      values: [
        { value: "21:9", title: "CinemaScope (21:9)" },
        { value: "16:9", title: "HD TV (16:9)" },
        { value: "4:3", title: "Traditional TV (4:3)" },
        { value: "1:1", title: "Square (1:1)" },
        { value: "3:4", title: "Portrait traditional TV (3:4)" },
        { value: "9:16", title: "Portrait HD TV (9:16)" },
      ],
    },
  },
  properties: ["vimeoVideoId", "aspectRatio"],
  initialContent: {
    aspectRatio: "16:9",
    vimeoVideoId: "15069551",
  },
});
