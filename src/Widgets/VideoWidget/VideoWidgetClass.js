import * as Scrivito from "scrivito";

export const VideoWidget = Scrivito.provideWidgetClass("VideoWidget", {
  attributes: {
    source: ["reference", { only: ["Video"] }],
    poster: ["reference", { only: ["Image"] }],
  },
});
