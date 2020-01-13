import * as Scrivito from "scrivito";
import pricingWidgetIcon from "../../assets/images/pricing_widget.svg";
import PricingSpecWidget from "../PricingSpecWidget/PricingSpecWidgetClass";

Scrivito.provideEditingConfig("PricingWidget", {
  title: "Pricing",
  thumbnail: pricingWidgetIcon,
  attributes: {
    currency: {
      title: "Currency",
      description: "e.g. € or $",
    },

    // Plan Buttons
    smallPlanButton: {
      title: "Small plan button",
      description:
        "Where should the small plan button lead and what should it say?",
    },
    mediumPlanButton: {
      title: "Medium plan button",
      description:
        "Where should the medium plan button lead and what should it say?",
    },
    largePlanButton: {
      title: "Large plan button",
      description:
        "Where should the large plan button lead and what should it say?",
    },
  },
  properties: [
    "currency",
    "smallPlanButton",
    "mediumPlanButton",
    "largePlanButton",
  ],
  initialContent: {
    currency: "€",
    smallPlanName: "Basic Plan",
    mediumPlanName: "Team Plan",
    largePlanName: "Corporate Plan",
    smallPlanPrice: "20",
    mediumPlanPrice: "30",
    largePlanPrice: "40",
    smallPlanPeriod: "/mo",
    mediumPlanPeriod: "/mo",
    largePlanPeriod: "/mo",
    smallPlanSpecs: [
      new PricingSpecWidget({ variable: "5", unit: "projects" }),
    ],
    mediumPlanSpecs: [
      new PricingSpecWidget({ variable: "15", unit: "projects" }),
    ],
    largePlanSpecs: [
      new PricingSpecWidget({ variable: "unlimited", unit: "projects" }),
    ],
    smallPlanButton: new Scrivito.Link({
      title: "Buy now",
      url: "https://scrivito.com",
    }),
    mediumPlanButton: new Scrivito.Link({
      title: "Buy now",
      url: "https://scrivito.com",
    }),
    largePlanButton: new Scrivito.Link({
      title: "Buy now",
      url: "https://scrivito.com",
    }),
  },
  validations: [
    [
      "currency",

      currency => {
        if (!currency) {
          return {
            message: "The currency should be set.",
            severity: "warning",
          };
        }
      },
    ],
    [
      "smallPlanPrice",

      smallPlanPrice => {
        if (!smallPlanPrice) {
          return {
            message: "The small plan price should be set.",
            severity: "warning",
          };
        }
      },
    ],
    [
      "mediumPlanPrice",

      mediumPlanPrice => {
        if (!mediumPlanPrice) {
          return {
            message: "The medium plan price should be set.",
            severity: "warning",
          };
        }
      },
    ],
    [
      "largePlanPrice",

      largePlanPrice => {
        if (!largePlanPrice) {
          return {
            message: "The large plan price should be set.",
            severity: "warning",
          };
        }
      },
    ],
    [
      "smallPlanButton",

      smallPlanButton => {
        if (!smallPlanButton) {
          return {
            message: "The small plan's button target should be set.",
            severity: "warning",
          };
        }
      },
    ],
    [
      "mediumPlanButton",

      mediumPlanButton => {
        if (!mediumPlanButton) {
          return {
            message: "The medium plan's button target should be set.",
            severity: "warning",
          };
        }
      },
    ],
    [
      "largePlanButton",

      largePlanButton => {
        if (!largePlanButton) {
          return {
            message: "The large plan's button target should be set.",
            severity: "warning",
          };
        }
      },
    ],
  ],
});
