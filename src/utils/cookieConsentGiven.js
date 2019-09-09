import { Cookies } from "react-cookie-consent";

let resolveCookie;
const cookiePromise = new Promise(resolve => (resolveCookie = resolve));

const interval = setInterval(() => {
  const consentCookie = Cookies.get("CookieConsent");
  if (consentCookie) {
    clearInterval(interval);
    if (consentCookie === "true") {
      resolveCookie();
    }
  }
}, 1000);

export function resolveCookieConsent() {
  resolveCookie();
}

export default function cookieConsentGiven() {
  return Scrivito.finishLoading().then(() => cookiePromise);
}
