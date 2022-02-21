import * as Scrivito from "scrivito";
import sectionWidgetIcon from "../../assets/images/section_widget.svg";

Scrivito.provideEditingConfig("SectionWidget", {
  title: "Section",
  thumbnail: sectionWidgetIcon,
  attributes: {
    backgroundColor: {
      title: "Background color",
      description:
        "Does not apply if a background image is set. Default: White",
      values: [
        { value: "white", title: "White" },
        { value: "greywhite", title: "White grey" },
        { value: "greylight", title: "Light grey" },
        { value: "greymiddle", title: "Grey" },
        { value: "greydark", title: "Dark grey" },
        { value: "brand-primary", title: "Primary color" },
        { value: "brand-secondary", title: "Secondary color" },
      ],
    },
    useFullWidth: {
      title: "Use full width?",
      description: "Default: No",
    },
    useFullHeight: {
      title: "Use full screen height?",
      description: "Default: No",
    },
    showPadding: {
      title: "Show padding?",
      description: "Padding adds space around this section. Default: Yes",
    },
    backgroundImage: {
      title: "Background image",
    },
  },
  properties: (widget) => [
    ["backgroundColor", { enabled: !widget.get("backgroundImage") }],
    "backgroundImage",
    "useFullWidth",
    "useFullHeight",
    "showPadding",
  ],
  initialContent: {
    backgroundColor: "white",
    showPadding: true,
  },
});
