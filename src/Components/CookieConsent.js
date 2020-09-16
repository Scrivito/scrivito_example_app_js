import * as React from "react";
import * as Scrivito from "scrivito";
import ReactCookieConsent, { Cookies } from "react-cookie-consent";
import cookieConsentIcon from "../assets/images/cookie_consent_icon.svg";
import { resolveCookieConsent } from "../utils/cookieConsentGiven";

class CookieConsent extends React.Component {
  componentDidMount() {
    if (Cookies.get("CookieConsent") === "true") {
      resolveCookieConsent();
    }
  }

  render() {
    const root = Scrivito.Obj.root();

    if (!root) {
      return null;
    }

    const cookieConsentLink = root.get("cookieConsentLink");

    if (!cookieConsentLink) {
      return null;
    }

    const cookieConsentLinkUrl = Scrivito.urlFor(cookieConsentLink);
    const cookieLinkTitle = cookieConsentLink.title() || "Learn more »";

    return (
      <ReactCookieConsent
        buttonText="accept"
        enableDeclineButton
        declineButtonText="decline"
        flipButtons
        disableStyles
        onAccept={resolveCookieConsent}
        containerClasses="fixed-bottom cookie-box d-lg-flex d-sm-flex align-items-center"
        contentClasses="cookie-content d-flex align-items-center"
        buttonClasses="cookie-button btn btn-primary ml-auto mr-2"
        declineButtonClasses="cookie-button btn btn-secondary ml-auto"
        buttonWrapperClasses="button-wrapper ml-auto"
        sameSite="strict"
      >
        <div className="cookie-img-box">
          <img
            className="cookie-img"
            src={cookieConsentIcon}
            alt="cookie-img"
          />
        </div>
        <div>
          <div className="cookie-box-title">Cookies policy</div>
          <div className="cookie-box-content">
            Our website uses cookies to analyze how the site is used and to
            ensure your experience is consistent between visits.
            <a
              className="cookie-box-link"
              href={cookieConsentLinkUrl}
              rel="noopener noreferrer"
              target="_blank"
            >
              {cookieLinkTitle}
            </a>
          </div>
        </div>
      </ReactCookieConsent>
    );
  }
}

export default Scrivito.connect(CookieConsent);
