import * as React from 'react';
import * as Scrivito from 'scrivito';
import Helmet from 'react-helmet';

class GoogleAnalytics extends React.Component {
  componentDidMount() {
    Scrivito.load(() => this.getTrackingId()).then(trackingId => {
      if (trackingId) {
        window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
        window.ga('create', trackingId, 'auto');
        window.ga('require', 'urlChangeTracker');
        window.ga('send', 'pageview');
      }
    });
  }

  render() {
    if (!this.getTrackingId()) {
      return null;
    }

    return (
      <Helmet>
        <script async src='/google_analytics.js'></script>
        <script async src='https://www.google-analytics.com/analytics.js'></script>
      </Helmet>
    );
  }

  getTrackingId() {
    const rootPage = Scrivito.Obj.getByPath('/');
    return rootPage.get('googleAnalyticsTrackingId');
  }
}

export default Scrivito.connect(GoogleAnalytics);
