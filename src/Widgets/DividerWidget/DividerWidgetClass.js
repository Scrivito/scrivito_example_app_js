import * as Scrivito from "scrivito";

const DividerWidget = Scrivito.provideWidgetClass("DividerWidget", {
  attributes: {
    showLogo: ["enum", { values: ["yes", "no"] }],
  },
});

export default DividerWidget;
