import * as Scrivito from "scrivito";

const VimeoVideoWidget = Scrivito.provideWidgetClass("VimeoVideoWidget", {
  attributes: {
    vimeoVideoId: "string",
    aspectRatio: [
      "enum",
      { values: ["21:9", "16:9", "4:3", "1:1", "3:4", "9:16"] },
    ],
  },
});

export default VimeoVideoWidget;
