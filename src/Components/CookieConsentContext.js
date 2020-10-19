import * as React from "react";
import * as Scrivito from "scrivito";

export const CookieConsentContext = React.createContext({});

export function CookieConsentProvider(props) {
  const [cookieConsent, setCookieConsent] = React.useState(() =>
    getCookieConsent()
  );

  function updateCookieConsent(consent) {
    localStorage.setItem("CookieConsent", consent);

    setCookieConsent(consent);
  }

  return (
    <CookieConsentContext.Provider
      value={{
        cookieConsent,
        acceptCookieConsent: () => updateCookieConsent("accepted"),
        declineCookieConsent: () => updateCookieConsent("declined"),
      }}
    >
      {props.children}
    </CookieConsentContext.Provider>
  );
}

export function cookieConsentUrl() {
  const root = Scrivito.Obj.root();

  if (!root) {
    return null;
  }

  const cookieConsentLink = root.get("cookieConsentLink");

  if (!cookieConsentLink) {
    return null;
  }

  return {
    url: Scrivito.urlFor(cookieConsentLink),
    title: cookieConsentLink.title() || "Learn more »",
  };
}

function getCookieConsent() {
  return localStorage.getItem("CookieConsent") || "undecided";
}
