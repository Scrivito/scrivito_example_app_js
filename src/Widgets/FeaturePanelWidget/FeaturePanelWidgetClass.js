import * as Scrivito from "scrivito";

export const FeaturePanelWidget = Scrivito.provideWidgetClass(
  "FeaturePanelWidget",
  {
    attributes: {
      icon: "string",
      headline: "string",
      description: "string",
    },
    extractTextAttributes: ["headline", "description"],
  }
);
