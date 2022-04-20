export default function filenameFromUrl(url) {
  const { pathname } = new URL(url);
  if (pathname === "/") return "/index.html";

  return `${pathname}.html`;
}
