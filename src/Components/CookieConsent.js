import * as React from "react";
import * as Scrivito from "scrivito";
import ReactCookieConsent from "react-cookie-consent";
import cookieConsentIcon from "../assets/images/cookie_consent_icon.svg";

function CookieConsent() {
  const root = Scrivito.Obj.root();
  const cookieLink = root.get("cookieConsentLink");

  if (!root || !cookieLink) {
    return null;
  }

  const cookieLinkUrl = Scrivito.urlFor(cookieLink);
  const cookieLinkTitle = cookieLink.title() || "Learn more »";

  return (
    <ReactCookieConsent
      buttonText="accept"
      disableStyles={true}
      containerClasses="cookie-box flex-row d-lg-flex d-sm-flex align-items-center"
      contentClasses="cookie-content flex-row d-flex align-items-center"
      buttonClasses="cookie-button btn btn-primary ml-auto"
    >
      <div className="cookie-img-box">
        <img className="cookie-img" src={cookieConsentIcon} />
      </div>
      <div>
        <div className="cookie-box-title">Cookies policy</div>
        <div className="cookie-box-content">
          Our website uses cookies to analyse how the site is used and to ensure
          your experience is consistent between visits.
          <a
            className="cookie-box-link"
            href={cookieLinkUrl}
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
