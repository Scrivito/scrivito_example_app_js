import * as React from "react";
import Helmet from "react-helmet";
import cookieConsentGiven from "../utils/cookieConsentGiven";

export default function Tracking() {
  const [trackingEnabled, setTrackingEnabled] = React.useState(false);
  React.useEffect(() => {
    cookieConsentGiven().then(() => setTrackingEnabled(true));
  }, []);

  return (
    trackingEnabled && (
      <Helmet>
        <script async src="/tracking.js" />
      </Helmet>
    )
  );
}
