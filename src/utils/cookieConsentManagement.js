import * as Scrivito from "scrivito";

let resolveCookie;
let resolveCookieConsentCalledBefore = false;

const cookiePromise = new Promise((resolve) => {
  resolveCookie = resolve;
});

function resolveCookieConsent() {
  if (resolveCookieConsentCalledBefore) {
    return;
  }

  resolveCookieConsentCalledBefore = true;

  resolveCookie();
}

export function cookieConsentGiven() {
  if (getCookieConsent() === "accepted") {
    resolveCookieConsent();
  }

  return Scrivito.finishLoading().then(() => cookiePromise);
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

export function getCookieConsent() {
  return localStorage.getItem("CookieConsent") || "undecided";
}

export function acceptCookieConsent() {
  localStorage.setItem("CookieConsent", "accepted");

  resolveCookieConsent();
}

export function declineCookieConsent() {
  localStorage.setItem("CookieConsent", "declined");
}
