import * as Scrivito from "scrivito";

const PricingWidget = Scrivito.provideWidgetClass("PricingWidget", {
  attributes: {
    currency: "string",

    // Plan Names
    smallPlanName: "string",
    mediumPlanName: "string",
    largePlanName: "string",

    // Plan Prices
    smallPlanPrice: "string",
    mediumPlanPrice: "string",
    largePlanPrice: "string",

    // Plan Periods
    smallPlanPeriod: "string",
    mediumPlanPeriod: "string",
    largePlanPeriod: "string",

    // Plan Specs
    smallPlanSpecs: ["widgetlist", { only: "PricingSpecWidget" }],
    mediumPlanSpecs: ["widgetlist", { only: "PricingSpecWidget" }],
    largePlanSpecs: ["widgetlist", { only: "PricingSpecWidget" }],

    // Plan Buttons
    smallPlanButton: "link",
    mediumPlanButton: "link",
    largePlanButton: "link",
  },
  extractTextAttributes: [
    "smallPlanSpecs",
    "mediumPlanSpecs",
    "largePlanSpecs",
  ],
});

export default PricingWidget;
