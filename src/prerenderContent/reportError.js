export function reportError(message, ...args) {
  // Report to your external error tracker here, like Honeybadger or Rollbar.
  console.log(`  ❌ [reportError] ${message}`, ...args);
}
