import * as Scrivito from "scrivito";
import { IconEditorTab } from "../../Components/ScrivitoExtensions/IconEditorTab";
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
      component: IconEditorTab,
      key: "icon-group",
    },
    {
      title: "Optional attributes",
      properties: ["size", "alignment", "link"],
      key: "optional-attributes-group",
    },
  ],
  initialContent: {
    icon: "fa-check-square-o",
    size: "fa-1x",
    alignment: "left",
  },
  titleForContent: (widget) => {
    const iconText = widget.get("icon").replace(/^fa-/, "");
    if (iconText) return `Icon: ${iconText}`;
  },
});
