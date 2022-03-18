import * as Scrivito from "scrivito";
import { defaultPageAttributes } from "../_defaultPageAttributes";
import { metadataAttributes } from "../_metadataAttributes";

export const Homepage = Scrivito.provideObjClass("Homepage", {
  attributes: {
    ...defaultPageAttributes,
    showAsLandingPage: "boolean",
    cookieConsentLink: "link",
    contentTitle: "string",
    childOrder: "referencelist",
    footer: ["widgetlist", { only: "SectionWidget" }],
    logoDark: ["reference", { only: ["Image"] }],
    logoWhite: ["reference", { only: ["Image"] }],
    dividerLogo: ["reference", { only: ["Image"] }],
    facebookAppId: "string",
    twitterSite: "string",
    googleMapsApiKey: "string",
    googleAnalyticsTrackingId: "string",
    intercomAppId: "string",
    ...metadataAttributes,
  },
  extractTextAttributes: ["navigationSection", "body"],
  onlyAsRoot: true,
});
