import * as Scrivito from "scrivito";

const YoutubeVideoWidget = Scrivito.provideWidgetClass("YoutubeVideoWidget", {
  attributes: {
    youtubeVideoId: "string",
    aspectRatio: [
      "enum",
      { values: ["21:9", "16:9", "4:3", "1:1", "3:4", "9:16"] },
    ],
  },
});

export default YoutubeVideoWidget;
