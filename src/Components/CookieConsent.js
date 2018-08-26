import * as React from "react";
import * as Scrivito from "scrivito";
import CookieConsent from "react-cookie-consent";

/**
 * @return {null}
 */
function CookieConsentBox() {
  const root = Scrivito.Obj.root();
  const cookieLink = root.get("cookiesPrivacyPolicyLink");
  const cookiesLinkTitle = cookieLink && cookieLink.title();

  if (!cookieLink) {
    return null;
  }

  return (
    <CookieConsent
      buttonText="accept"
      disableStyles="true"
      containerClasses="cookie-box flex-row d-lg-flex d-sm-flex"
      contentClasses="cookie-content flex-row d-flex"
      buttonClasses="btn btn-primary cookie-button ml-auto"
    >
      <div className="cookie-img-box">
        <img
          className="cookie-img"
          src="../../src/assets/images/iconmonstr-candy-6.svg"
        />
      </div>
      <div>
        <div className="cookie-box-title">Cookies policy</div>
        <div className="cookie-box-content">
          Our website uses cookies to analyse how the site is used and to ensure
          your experience is consistent between visits.
          <a
            className="cookie-box-link"
            href={cookieLink}
            rel="noopener noreferrer"
            target="_blank"
          >
            {cookiesLinkTitle || "Learn more »"}
          </a>
        </div>
      </div>
    </CookieConsent>
  );
}

export default Scrivito.connect(CookieConsentBox);
