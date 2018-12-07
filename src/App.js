import * as React from "react";
import * as Scrivito from "scrivito";
import CurrentPageMetaData from "./Components/CurrentPageMetaData";
import ErrorBoundary from "./Components/ErrorBoundary";
import Footer from "./Components/Footer";
import GoogleAnalytics from "./Components/GoogleAnalytics";
import Intercom from "./Components/Intercom";
import Navigation from "./Components/Navigation";
import NotFoundErrorPage from "./Components/NotFoundErrorPage";
import CookieConsent from "./Components/CookieConsent";
import imagesLoaded from "images-loaded";

class App extends React.Component {


  componentDidMount(){
    Scrivito.finishLoading().then(() =>
    imagesLoaded(document).then(() =>  {
      const ele = document.getElementById('ipl-progress-indicator')
      if(ele){
        // fade out
        ele.classList.add('available')
        setTimeout(() => {
          // remove from DOM
          ele.outerHTML = ''
        }, 2000)
      }
    }))
  }
  render() {
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
          <CurrentPageMetaData />
          <GoogleAnalytics />
          <Intercom />
        </div>
      </ErrorBoundary>
    );
  }
}

export default App;
