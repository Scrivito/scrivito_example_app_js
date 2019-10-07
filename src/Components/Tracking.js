import * as React from "react";
import * as Scrivito from "scrivito";
import Helmet from "react-helmet";
import cookieConsentGiven from "../utils/cookieConsentGiven";

export default function Tracking() {
  const [trackingEnabled, setTrackingEnabled] = React.useState(false);
  React.useEffect(() => {
    cookieConsentGiven()
      .then(() => configureGoogleAnalytics())
      .then(() => setTrackingEnabled(true));
  }, []);

  return (
    trackingEnabled && (
      <Helmet>
        <script async src="/tracking.js" />
      </Helmet>
    )
  );
}

function configureGoogleAnalytics() {
  return Scrivito.load(() => {
    const rootPage = Scrivito.Obj.root();
    if (!rootPage) {
      return undefined;
    }
    return rootPage.get("googleAnalyticsTrackingId");
  }).then(trackingId => {
    if (trackingId) {
      window.ga =
        window.ga ||
        function ga(...args) {
          (window.ga.q = window.ga.q || []).push(args);
        };
      window.ga.l = +new Date();
      window.ga("create", trackingId, "auto");
      window.ga("set", "anonymizeIp", true);
      window.ga("require", "urlChangeTracker");
      window.ga("send", "pageview");
    }
  });
}
