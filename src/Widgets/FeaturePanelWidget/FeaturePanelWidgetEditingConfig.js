import * as Scrivito from "scrivito";
import featurePanelWidgetIcon from "../../assets/images/feature_panel_widget.svg";

Scrivito.provideEditingConfig("FeaturePanelWidget", {
  title: "Feature Panel",
  thumbnail: featurePanelWidgetIcon,
  propertiesGroups: [
    {
      title: "Icon",
      component: "IconEditorTab",
      key: "icon-group",
    },
  ],
  initialContent: {
    icon: "fa-check",
    headline: "Lorem Ipsum",
  },
  validations: [
    [
      "headline",

      (headline) => {
        if (!headline) {
          return {
            message: "The headline should be set.",
            severity: "warning",
          };
        }
      },
    ],
  ],
});
