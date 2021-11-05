import * as Scrivito from "scrivito";
import homepageObjIcon from "../../assets/images/homepage_obj.svg";
import {
  defaultPageEditingConfigAttributes,
  defaultPageInitialContent,
  defaultPageProperties,
  defaultPageValidations,
} from "../_defaultPageEditingConfig";
import {
  metadataEditingConfigAttributes,
  metadataInitialContent,
  metadataPropertiesGroups,
  metadataValidations,
} from "../_metadataEditingConfig";

Scrivito.provideEditingConfig("Homepage", {
  title: "Homepage",
  thumbnail: homepageObjIcon,
  attributes: {
    ...defaultPageEditingConfigAttributes,
    ...metadataEditingConfigAttributes,
    contentTitle: {
      title: "Site name",
    },
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
      values: [
        { value: "yes", title: "Yes" },
        { value: "no", title: "No" },
      ],
    },
    cookieConsentLink: {
      title: "Privacy policy for cookie consent",
      description:
        'If you set this link, a cookie consent box will be shown on every page. To preview the effect of this setting, please enable third-party cookies in your browser. The link title defaults to "Learn more »".',
    },
  },
  properties: (obj) => [...defaultPageProperties(obj), "showAsLandingPage"],
  propertiesGroups: [
    {
      title: "Site settings",
      properties: [
        "contentTitle",
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
      key: "site-settings-group",
    },
    ...metadataPropertiesGroups,
  ],
  initialContent: {
    ...defaultPageInitialContent,
    ...metadataInitialContent,
    showAsLandingPage: "no",
  },
  validations: [...defaultPageValidations, ...metadataValidations],
});
