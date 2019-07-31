function getCookieValue(cookieName) {
  const cookie = document.cookie
    .split(";")
    .find(value => value.includes(cookieName));
  if (cookie) {
    return cookie.split("=")[1];
  }
}

export default getCookieValue;
