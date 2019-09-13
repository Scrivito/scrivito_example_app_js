// import { Cookies } from "react-cookie-consent";
import * as Scrivito from "scrivito";

let resolveCookie;
const cookiePromise = new Promise(resolve => (resolveCookie = resolve));

export function resolveCookieConsent() {
  resolveCookie();
}

export default function cookieConsentGiven() {
  return Scrivito.finishLoading().then(() => cookiePromise);
}
