import * as Scrivito from "scrivito";

export const HeadlineWidget = Scrivito.provideWidgetClass("HeadlineWidget", {
  attributes: {
    headline: "string",
    level: ["enum", { values: ["h1", "h2", "h3", "h4", "h5", "h6"] }],
    style: ["enum", { values: ["h1", "h2", "h3", "h4", "h5", "h6"] }],
    alignment: ["enum", { values: ["left", "center", "right"] }],
    showDividingLine: "boolean",
    showMargin: "boolean",
  },
  extractTextAttributes: ["headline"],
});
