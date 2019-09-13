import * as React from "react";
import * as Scrivito from "scrivito";
import cookieConsentGiven from "../utils/cookieConsentGiven";

export default function GoogleAnalytics() {
  React.useEffect(() => {
    cookieConsentGiven()
      .then(() =>
        Scrivito.load(() => {
          const rootPage = Scrivito.Obj.root();
          if (!rootPage) {
            return undefined;
          }
          return rootPage.get("googleAnalyticsTrackingId");
        })
      )
      .then(trackingId => {
        if (trackingId) {
          window.ga =
            window.ga ||
            function() {
              (window.ga.q = window.ga.q || []).push(arguments);
            };
          window.ga.l = +new Date();
          window.ga("create", trackingId, "auto");
          window.ga("set", "anonymizeIp", true);
          window.ga("require", "urlChangeTracker");
          window.ga("send", "pageview");
        }
      });
  }, []);

  return null;
}
