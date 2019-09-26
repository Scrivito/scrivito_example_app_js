import * as React from "react";
import * as Scrivito from "scrivito";
import ErrorBoundary from "./Components/ErrorBoundary";
import Footer from "./Components/Footer";
import Navigation from "./Components/Navigation";

const GoogleAnalytics = React.lazy(() =>
  import("./Components/GoogleAnalytics")
);
const Intercom = React.lazy(() => import("./Components/Intercom"));
const CookieConsent = React.lazy(() => import("./Components/CookieConsent"));
const CurrentPageMetadata = React.lazy(() =>
  import("./Components/CurrentPageMetadata")
);
const NotFoundErrorPage = React.lazy(() =>
  import("./Components/NotFoundErrorPage")
);

export default function App() {
  return (
    <ErrorBoundary>
      <div>
        <div className="content-wrapper">
          <Navigation />
          <Scrivito.CurrentPage />
          <React.Suspense fallback={<div />}>
            <NotFoundErrorPage />
          </React.Suspense>
        </div>
        <Footer />
        <React.Suspense fallback={<div />}>
          <CookieConsent />
        </React.Suspense>
        <React.Suspense fallback={<div />}>
          <CurrentPageMetadata />
        </React.Suspense>
        <React.Suspense fallback={<div />}>
          <GoogleAnalytics />
        </React.Suspense>
        <React.Suspense fallback={<div />}>
          <Intercom />
        </React.Suspense>
      </div>
    </ErrorBoundary>
  );
}
