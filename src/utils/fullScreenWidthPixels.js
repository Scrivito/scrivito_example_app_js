import devicePixelRatio from 'utils/devicePixelRatio';

function fullScreenWidthPixels() {
  const screenWidth = window.screen.width;

  return screenWidth * devicePixelRatio();
}

export default fullScreenWidthPixels;
