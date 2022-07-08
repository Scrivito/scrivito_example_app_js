import { devicePixelRatio } from "./devicePixelRatio";

/**
 * Based on (and thus optimized for) the Lighthouse mobile emulation.
 * See https://github.com/GoogleChrome/lighthouse/blob/777bf1147fd0f6aca16ffefde1350bf6297476d4/lighthouse-core/config/constants.js#L58-L63.
 * */
const SSR_FALLBACK_WIDTH_PX = 945;

export function fullScreenWidthPixels() {
  if (typeof window === "undefined") return SSR_FALLBACK_WIDTH_PX;

  const screenWidth = window.screen.width;

  return screenWidth * devicePixelRatio();
}
