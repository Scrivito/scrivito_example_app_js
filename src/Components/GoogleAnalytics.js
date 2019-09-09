import * as React from "react";
import * as Scrivito from "scrivito";
import Helmet from "react-helmet";
import cookieConsentGiven from "../utils/cookieConsentGiven";

class GoogleAnalytics extends React.Component {
  constructor(props) {
    super(props);

    this.state = { trackingId: "" };
  }

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
        cookieConsentGiven();
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
    if (!this.state.trackingId || !cookieConsentGiven()) {
      return null;
    }

    return (
      <Helmet>
        <script async src="/tracking.js" />
        <script async src="https://www.google-analytics.com/analytics.js" />
      </Helmet>
    );
  }
}

export default Scrivito.connect(GoogleAnalytics);
