import * as React from "react";

const CookieConsentContext = React.createContext({});

export function CookieConsentProvider(props) {
  const [cookieConsentChoice, setCookieConsentChoice] = React.useState(() =>
    getCookieConsent()
  );

  function updateCookieConsent(consent) {
    localStorage.setItem("CookieConsent", consent);

    setCookieConsentChoice(consent);
  }

  return (
    <CookieConsentContext.Provider
      value={{
        cookieConsentChoice,
        acceptCookieConsent: () => updateCookieConsent("accepted"),
        declineCookieConsent: () => updateCookieConsent("declined"),
      }}
    >
      {props.children}
    </CookieConsentContext.Provider>
  );
}

export function useCookieConsent() {
  return React.useContext(CookieConsentContext);
}

function getCookieConsent() {
  return localStorage.getItem("CookieConsent") || "undecided";
}
