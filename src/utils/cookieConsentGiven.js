import { Cookies } from "react-cookie-consent";

export default function cookieConsentGiven() {
  return Cookies.get("CookieConsent") === "true";
}
