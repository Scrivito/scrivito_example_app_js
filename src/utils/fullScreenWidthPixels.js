import devicePixelRatio from "./devicePixelRatio";

const SSR_FALLBACK_WIDTH_PX = 945;

function fullScreenWidthPixels() {
  if (typeof window === "undefined") {
    return SSR_FALLBACK_WIDTH_PX;
  }

  const screenWidth = window.screen.width;

  return screenWidth * devicePixelRatio();
}

export default fullScreenWidthPixels;
