import * as React from "react";
import * as Scrivito from "scrivito";
import { HelmetProvider } from "react-helmet-async";

import CurrentPageMetadata from "./Components/CurrentPageMetadata";
import ErrorBoundary from "./Components/ErrorBoundary";
import Footer from "./Components/Footer";
import Intercom from "./Components/Intercom";
import Navigation from "./Components/Navigation";
import NotFoundErrorPage from "./Components/NotFoundErrorPage";
import CookieConsent from "./Components/CookieConsent";
import Tracking from "./Components/Tracking";

export const helmetContext = {};

export default function App() {
  return (
    <ErrorBoundary>
      <HelmetProvider context={helmetContext}>
        <div>
          <div className="content-wrapper">
            <Navigation />
            <Scrivito.CurrentPage />
            <NotFoundErrorPage />
          </div>
          <Footer />
          <CurrentPageMetadata />
          <CookieConsent />
          <Tracking />
          <Intercom />
        </div>
      </HelmetProvider>
    </ErrorBoundary>
  );
}
