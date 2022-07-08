import * as Scrivito from "scrivito";

export const GoogleMapsWidget = Scrivito.provideWidgetClass(
  "GoogleMapsWidget",
  {
    attributes: {
      address: "string",
      mapType: ["enum", { values: ["interactive", "static"] }],
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
      showWidgets: "boolean",
      content: "widgetlist",
    },
    extractTextAttributes: ["content"],
  }
);
