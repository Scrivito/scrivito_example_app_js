import * as React from 'react';
import * as Scrivito from 'scrivito';
import CurrentPageMetaData from './Components/CurrentPageMetaData';
import ErrorBoundary from './Components/ErrorBoundary';
import Footer from './Components/Footer';
import GoogleAnalytics from './Components/GoogleAnalytics';
import Navigation from './Components/Navigation';
import NotFoundErrorPage from './Components/NotFoundErrorPage';

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
        <CurrentPageMetaData />
        <GoogleAnalytics />
      </div>
    </ErrorBoundary>
  );
}
