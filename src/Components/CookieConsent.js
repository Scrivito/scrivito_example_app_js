import * as React from "react";
import * as Scrivito from "scrivito";
import { cookieConsentUrl, CookieConsentContext } from "./CookieConsentContext";
import cookieConsentIcon from "../assets/images/cookie_consent_icon.svg";

function CookieConsent() {
  const consentUrl = cookieConsentUrl();
  const [visible, setVisible] = React.useState(false);
  const {
    cookieConsent,
    acceptCookieConsent,
    declineCookieConsent,
  } = React.useContext(CookieConsentContext);

  React.useEffect(() => {
    setVisible(cookieConsent === "undecided");
  }, [cookieConsent]);

  if (!visible || !consentUrl) {
    return null;
  }

  return (
    <CookieBanner
      url={consentUrl.url}
      title={consentUrl.title}
      onAccept={acceptCookieConsent}
      onDecline={declineCookieConsent}
    />
  );
}

function CookieBanner(props) {
  return (
    <div className="fixed-bottom cookie-box d-lg-flex d-sm-flex align-items-center">
      <div className="cookie-content d-flex align-items-center">
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
              href={props.url}
              rel="noopener noreferrer"
              target="_blank"
            >
              {props.title}
            </a>
          </div>
        </div>
      </div>
      <div className="button-wrapper ml-auto">
        <button
          className="cookie-button btn btn-primary ml-auto mr-2"
          onClick={props.onAccept}
        >
          Accept
        </button>
        <button
          className="cookie-button btn btn-secondary ml-auto"
          onClick={props.onDecline}
        >
          Decline
        </button>
      </div>
    </div>
  );
}

export default Scrivito.connect(CookieConsent);
