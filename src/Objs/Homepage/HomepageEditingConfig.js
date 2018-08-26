import * as Scrivito from "scrivito";
import homepageObjIcon from "../../assets/images/homepage_obj.svg";
import {
  defaultPageEditingConfigAttributes,
  defaultPageInitialContent,
  defaultPageProperties,
} from "../_defaultPageEditingConfig";
import {
  metaDataEditingConfigAttributes,
  metaDataInitialContent,
  metaDataPropertiesGroup,
  socialCardsPropertiesGroup,
} from "../_metaDataEditingConfig";

Scrivito.provideEditingConfig("Homepage", {
  title: "Homepage",
  thumbnail: homepageObjIcon,
  hideInSelectionDialogs: true,
  attributes: {
    ...defaultPageEditingConfigAttributes,
    ...metaDataEditingConfigAttributes,
    logoDark: {
      title: "Dark logo",
      description: "Used with light backgrounds",
    },
    logoWhite: {
      title: "Light logo",
      description: "Used with dark backgrounds",
    },
    dividerLogo: {
      title: "Divider logo",
      description: "Used in the divider widget",
    },
    facebookAppId: {
      title: "Facebook app ID",
      description:
        "Register at https://developers.facebook.com/docs/apps/register",
    },
    twitterSite: {
      title: "Twitter site",
      description:
        "Needs to be approved at https://cards-dev.twitter.com/validator",
    },
    googleMapsApiKey: {
      title: "Google Maps API key",
      description:
        "Needs to be requested at https://developers.google.com/maps/web/",
    },
    googleAnalyticsTrackingId: {
      title: "Google Analytics tracking ID",
      description:
        "Needs to be requested under your GA property settings." +
        " See https://analytics.google.com for details.",
    },
    intercomAppId: {
      title: "Intercom app ID",
      description: "Register at https://www.intercom.com/",
    },
    showAsLandingPage: {
      title: "Display this page as a landing page?",
      description:
        "Removes the header navigation and only centers the logo instead. Default: No",
      values: [{ value: "yes", title: "Yes" }, { value: "no", title: "No" }],
    },
    cookiesPrivacyPolicyLink: {
      title: "Cookie privacy policy link",
      description:
        "The link to privacy policy content of your website. Title is optional, default title: Learn more »",
    },
  },
  properties: [
    ...defaultPageProperties,
    "showAsLandingPage",
    "cookiesPrivacyPolicyLink",
  ],
  propertiesGroups: [
    {
      title: "Site settings",
      properties: [
        "logoDark",
        "logoWhite",
        "dividerLogo",
        "facebookAppId",
        "twitterSite",
        "googleMapsApiKey",
        "googleAnalyticsTrackingId",
        "intercomAppId",
      ],
    },
    socialCardsPropertiesGroup,
    metaDataPropertiesGroup,
  ],
  initialContent: {
    ...defaultPageInitialContent,
    ...metaDataInitialContent,
    showAsLandingPage: "no",
  },
});
