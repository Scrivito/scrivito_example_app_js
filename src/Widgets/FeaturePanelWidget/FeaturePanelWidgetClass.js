import * as Scrivito from "scrivito";

const FeaturePanelWidget = Scrivito.provideWidgetClass("FeaturePanelWidget", {
  attributes: {
    icon: "string",
    headline: "string",
    description: "string",
  },
  extractTextAttributes: ["headline", "description"],
});

export default FeaturePanelWidget;
