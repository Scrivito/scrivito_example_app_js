import * as React from "react";
import * as Scrivito from "scrivito";
import ReactCookieConsent from "react-cookie-consent";
import cookieConsentIcon from "../assets/images/cookie_consent_icon.svg";

function CookieConsent() {
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
      disableStyles
      containerClasses="cookie-box d-lg-flex d-sm-flex align-items-center"
      contentClasses="cookie-content d-flex align-items-center"
      buttonClasses="cookie-button btn btn-primary ml-auto"
    >
      <div className="cookie-img-box">
        <img className="cookie-img" src={cookieConsentIcon} />
      </div>
      <div>
        <div className="cookie-box-title">Cookies policy</div>
        <div className="cookie-box-content">
          Our website uses cookies to analyze how the site is used and to ensure
          your experience is consistent between visits.
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

export default Scrivito.connect(CookieConsent);
