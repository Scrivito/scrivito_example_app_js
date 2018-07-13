import * as React from "react";
import * as Scrivito from "scrivito";
import Helmet from "react-helmet";

class GoogleAnalytics extends React.Component {
  constructor(props) {
    super(props);

    this.state = { trackingId: "" };
  }

  componentDidMount() {
    Scrivito.load(() => {
      const rootPage = Scrivito.Obj.root();
      if (!rootPage) {
        return;
      }
      return rootPage.get("googleAnalyticsTrackingId");
    }).then(trackingId => {
      if (trackingId) {
        Scrivito.finishLoading().then(() => {
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

          this.setState({ trackingId });
        });
      }
    });
  }

  render() {
    if (!this.state.trackingId) {
      return null;
    }

    return (
      <Helmet>
        <script async src="/google_analytics.js" />
        <script async src="https://www.google-analytics.com/analytics.js" />
      </Helmet>
    );
  }
}

export default Scrivito.connect(GoogleAnalytics);
