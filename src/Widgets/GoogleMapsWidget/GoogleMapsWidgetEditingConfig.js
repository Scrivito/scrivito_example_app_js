import * as Scrivito from "scrivito";
import googleMapsWidgetIcon from "../../assets/images/google_maps_widget.svg";

Scrivito.provideEditingConfig("GoogleMapsWidget", {
  title: "Google Maps",
  thumbnail: googleMapsWidgetIcon,
  attributes: {
    address: {
      title: "Address",
      description:
        "The address that should be shown on the map." +
        " Default: Brandenburg Gate, Berlin, Germany",
    },
    zoom: {
      title: "Zoom level",
      description: "Default: 15 (Street level)",
      values: [
        { value: "1", title: "1 (World level)" },
        { value: "2", title: "2" },
        { value: "3", title: "3" },
        { value: "4", title: "4" },
        { value: "5", title: "5" },
        { value: "6", title: "6" },
        { value: "7", title: "7" },
        { value: "8", title: "8" },
        { value: "9", title: "9" },
        { value: "10", title: "10" },
        { value: "11", title: "11" },
        { value: "12", title: "12" },
        { value: "13", title: "13" },
        { value: "14", title: "14" },
        { value: "15", title: "15 (Street level)" },
        { value: "16", title: "16" },
        { value: "17", title: "17" },
        { value: "18", title: "18" },
        { value: "19", title: "19" },
        { value: "20", title: "20 (Building level)" },
      ],
    },
    showWidgets: {
      title: "Show widgets?",
      description: "Should widgets be shown on top of this map? Default: No",
      values: [{ value: "yes", title: "Yes" }, { value: "no", title: "No" }],
    },
  },
  properties: ["address", "zoom", "showWidgets"],
  initialContent: {
    address: "Brandenburg Gate, Berlin, Germany",
    showWidgets: "no",
    zoom: "15",
  },
});
