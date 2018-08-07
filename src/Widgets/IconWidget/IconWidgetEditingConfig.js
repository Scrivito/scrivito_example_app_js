import * as Scrivito from "scrivito";
import iconWidgetIcon from "../../assets/images/icon_widget.svg";

Scrivito.provideEditingConfig("IconWidget", {
  title: "Icon",
  thumbnail: iconWidgetIcon,
  attributes: {
    size: {
      title: "Size",
      description: "Default: 100% (Normal)",
      values: [
        { value: "fa-1x", title: "100% (Normal)" },
        { value: "fa-lg", title: "133%" },
        { value: "fa-2x", title: "200%" },
        { value: "fa-3x", title: "300%" },
        { value: "fa-4x", title: "400%" },
        { value: "fa-5x", title: "500% (Biggest)" },
      ],
    },
    alignment: {
      title: "Alignment",
      description: "A icon list widget ignores this setting. Default: Left",
      values: [
        { value: "left", title: "Left" },
        { value: "center", title: "Center" },
        { value: "right", title: "Right" },
      ],
    },
    link: {
      title: "Link (optional)",
      description: "The link where this icon should lead.",
    },
  },
  propertiesGroups: [
    {
      title: "Icon",
      component: "IconEditorTab",
    },
    {
      title: "Optional attributes",
      properties: ["size", "alignment", "link"],
    },
  ],
  initialContent: {
    icon: "fa-check-square-o",
    size: "fa-1x",
    alignment: "left",
  },
  titleForContent: widget => widget.get("icon").replace(/^fa-/, ""),
});
