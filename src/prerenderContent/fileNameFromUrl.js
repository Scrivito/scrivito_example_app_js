export default function fileNameFromUrl(url) {
  const pathname = new URL(url).pathname;
  if (pathname === "/") {
    return "/index.html";
  }

  return `${pathname}.html`;
}
