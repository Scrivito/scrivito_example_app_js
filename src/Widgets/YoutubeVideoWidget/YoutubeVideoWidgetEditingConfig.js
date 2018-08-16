import * as Scrivito from "scrivito";
import youtubeVideoWidgetIcon from "../../assets/images/youtube_video_widget.svg";

Scrivito.provideEditingConfig("YoutubeVideoWidget", {
  title: "YouTube Video",
  thumbnail: youtubeVideoWidgetIcon,
  attributes: {
    youtubeVideoId: {
      title: "YouTube video ID",
      description:
        "Every video at YouTube has a unique identifier that consists of a series" +
        " of digits and letters. In the video URL, the ID usually is the value of the" +
        ' "v" parameter, e.g. Ys1w9A4DrO4 in youtube.com/watch?v=Ys1w9A4DrO4&feature=youtu.be.',
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
  properties: ["youtubeVideoId", "aspectRatio"],
  initialContent: {
    aspectRatio: "16:9",
    youtubeVideoId: "Ys1w9A4DrO4",
  },
});
