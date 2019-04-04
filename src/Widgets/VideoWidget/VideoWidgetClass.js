import * as Scrivito from "scrivito";

const VideoWidget = Scrivito.provideWidgetClass("VideoWidget", {
  attributes: {
    source: ["reference", { only: ["Video", "Download"] }],
    showText: ["enum", { values: ["yes", "no"] }],
    playText: "string",
    textPosition: ["enum", { values: ["left", "right"] }],
    color: ["enum", { values: ["primary", "secondary"] }],
    btnSize: ["enum", { values: ["big", "small"] }],
    poster: ["reference", { only: ["Image"] }],
  },
});

export default VideoWidget;
