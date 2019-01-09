import * as Scrivito from "scrivito";
import homepageObjIcon from "../../assets/images/homepage_obj.svg";
import {
  defaultPageEditingConfigAttributes,
  defaultPageInitialContent,
  defaultPageProperties,
} from "../_defaultPageEditingConfig";
import {
  metadataEditingConfigAttributes,
  metadataInitialContent,
  metadataPropertiesGroup,
  socialCardsPropertiesGroup,
} from "../_metadataEditingConfig";

Scrivito.provideEditingConfig("Homepage", {
  title: "Homepage",
  thumbnail: homepageObjIcon,
  hideInSelectionDialogs: true,
  attributes: {
    ...defaultPageEditingConfigAttributes,
    ...metadataEditingConfigAttributes,
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
    cookieConsentLink: {
      title: "Cookie consent link",
      description:
        'If you set this link, a cookie consent box will be shown on every page. The link should point to your privacy policy. The link title defaults to "Learn more »".',
    },
  },
  properties: [...defaultPageProperties, "showAsLandingPage"],
  propertiesGroups: [
    {
      title: "Site settings",
      properties: [
        "logoDark",
        "logoWhite",
        "dividerLogo",
        "cookieConsentLink",
        "facebookAppId",
        "twitterSite",
        "googleMapsApiKey",
        "googleAnalyticsTrackingId",
        "intercomAppId",
      ],
    },
    socialCardsPropertiesGroup,
    metadataPropertiesGroup,
  ],
  initialContent: {
    ...defaultPageInitialContent,
    ...metadataInitialContent,
    showAsLandingPage: "no",
  },
});
