import * as Scrivito from "scrivito";
import featurePanelWidgetIcon from "../../assets/images/feature_panel_widget.svg";

Scrivito.provideEditingConfig("FeaturePanelWidget", {
  title: "Feature Panel",
  thumbnail: featurePanelWidgetIcon,
  propertiesGroups: [
    {
      title: "Icon",
      component: "IconEditorTab",
    },
  ],
  initialContent: {
    icon: "fa-check",
  },
});
