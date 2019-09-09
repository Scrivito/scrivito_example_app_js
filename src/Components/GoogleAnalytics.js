import * as React from "react";
import * as Scrivito from "scrivito";
import cookieConsentGiven from "../utils/cookieConsentGiven";

class GoogleAnalytics extends React.Component {
  componentDidMount() {
    let trackingId;

    Scrivito.load(() => {
      const rootPage = Scrivito.Obj.root();
      if (!rootPage) {
        return undefined;
      }
      return rootPage.get("googleAnalyticsTrackingId");
    })
      .then(tracking_ID => {
        trackingId = tracking_ID;
        return cookieConsentGiven();
      })
      .then(() => {
        if (trackingId) {
          window.ga =
            window.ga ||
            function() {
              (ga.q = ga.q || []).push(arguments);
            };
          ga.l = +new Date();
          window.ga("create", trackingId, "auto");
          window.ga("set", "anonymizeIp", true);
          window.ga("require", "urlChangeTracker");
          window.ga("send", "pageview");
        }
      });
  }

  render() {
    return null;
  }
}

export default Scrivito.connect(GoogleAnalytics);
