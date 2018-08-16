import * as Scrivito from "scrivito";
import { registerTextExtract } from "../../utils/textExtractRegistry";

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
});

registerTextExtract("PricingWidget", [
  { attribute: "smallPlanSpecs", type: "widgetlist" },
  { attribute: "mediumPlanSpecs", type: "widgetlist" },
  { attribute: "largePlanSpecs", type: "widgetlist" },
]);

export default PricingWidget;
