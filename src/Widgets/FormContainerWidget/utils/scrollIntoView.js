export function scrollIntoView(element) {
  window.scrollTo({
    top: getTop(element) - 95,
    behavior: "smooth",
  });
}

function getTop(element) {
  const rect = element.getBoundingClientRect();
  return rect.top + window.pageYOffset;
}
