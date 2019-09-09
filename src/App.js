import * as React from "react";
import * as Scrivito from "scrivito";
import CurrentPageMetadata from "./Components/CurrentPageMetadata";
import ErrorBoundary from "./Components/ErrorBoundary";
import Footer from "./Components/Footer";
import GoogleAnalytics from "./Components/GoogleAnalytics";
import Intercom from "./Components/Intercom";
import Navigation from "./Components/Navigation";
import NotFoundErrorPage from "./Components/NotFoundErrorPage";
import CookieConsent from "./Components/CookieConsent";
import Tracking from "./Components/Tracking";

export default function App() {
  return (
    <ErrorBoundary>
      <div>
        <div className="content-wrapper">
          <Navigation />
          <Scrivito.CurrentPage />
          <NotFoundErrorPage />
        </div>
        <Footer />
        <CookieConsent />
        <CurrentPageMetadata />
        <Tracking />
        <GoogleAnalytics />
        <Intercom />
      </div>
    </ErrorBoundary>
  );
}
