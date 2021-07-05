import * as React from "react";

const CookieConsentContext = React.createContext({});

export function CookieConsentProvider(props) {
  const [cookieConsentChoice, setCookieConsentChoice] = React.useState(
    "undecided"
  );

  React.useEffect(() => setCookieConsentChoice(getCookieConsent()), []);

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
  try {
    return localStorage.getItem("CookieConsent") || "undecided";
  } catch (e) {
    if (e instanceof DOMException) {
      // Prevent "Uncaught DOMException: Failed to read the 'localStorage' property from 'Window': Access is denied for this document."
      return "declined";
    }

    throw e;
  }
}
