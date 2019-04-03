import * as Scrivito from "scrivito";

const VideoWidget = Scrivito.provideWidgetClass("VideoWidget", {
  attributes: {
    showText: ["enum", { values: ["yes", "no"] }],
    playText: "string",
    textPostion: ["enum", { values: ["left", "right"] }],
    color: ["enum", { values: ["primary", "secondary"] }],
    source: ["reference", { only: ["Video", "Download"] }],
    poster: ["reference", { only: ["Image"] }],
  },
});

export default VideoWidget;
