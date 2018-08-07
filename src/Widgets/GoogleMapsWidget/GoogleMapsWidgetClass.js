import * as Scrivito from "scrivito";
import { registerTextExtract } from "../../utils/textExtractRegistry";

const GoogleMapsWidget = Scrivito.provideWidgetClass("GoogleMapsWidget", {
  attributes: {
    address: "string",
    zoom: [
      "enum",
      {
        values: [
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "11",
          "12",
          "13",
          "14",
          "15",
          "16",
          "17",
          "18",
          "19",
          "20",
        ],
      },
    ],
    showWidgets: ["enum", { values: ["yes", "no"] }],
    content: "widgetlist",
  },
});

registerTextExtract("GoogleMapsWidget", [
  { attribute: "content", type: "widgetlist" },
]);

export default GoogleMapsWidget;
