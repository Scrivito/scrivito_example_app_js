import * as React from "react";
import { Helmet } from "react-helmet-async";
import { useCookieConsent } from "./CookieConsentContext";

export function Tracking() {
  const [trackingEnabled, setTrackingEnabled] = React.useState(false);
  const { cookieConsentChoice } = useCookieConsent();

  React.useEffect(() => {
    if (cookieConsentChoice === "accepted") setTrackingEnabled(true);
  }, [cookieConsentChoice]);

  return (
    trackingEnabled && (
      <Helmet>
        <script async src="/tracking.js" />
      </Helmet>
    )
  );
}
