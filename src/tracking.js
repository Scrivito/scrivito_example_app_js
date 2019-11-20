import "autotrack/lib/plugins/url-change-tracker";

const googleScript = document.createElement("script");
googleScript.setAttribute("async", true);
googleScript.setAttribute(
  "src",
  "https://www.google-analytics.com/analytics.js"
);
document.head.appendChild(googleScript);
