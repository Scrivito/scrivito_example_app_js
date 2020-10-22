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
        setCookieConsentChoice: updateCookieConsent,
      }}
    >
      {props.children}
    </CookieConsentContext.Provider>
  );
}

export function useCookieConsent() {
  const { cookieConsentChoice, setCookieConsentChoice } = React.useContext(
    CookieConsentContext
  );

  return {
    cookieConsentChoice,
    acceptCookieConsent: () => setCookieConsentChoice("accepted"),
    declineCookieConsent: () => setCookieConsentChoice("declined"),
  };
}

function getCookieConsent() {
  return localStorage.getItem("CookieConsent") || "undecided";
}
