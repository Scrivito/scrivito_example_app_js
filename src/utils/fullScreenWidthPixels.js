import devicePixelRatio from "./devicePixelRatio";

function fullScreenWidthPixels() {
  const screenWidth = window.screen.width;

  return screenWidth * devicePixelRatio();
}

export default fullScreenWidthPixels;
