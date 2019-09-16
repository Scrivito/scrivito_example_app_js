import "autotrack/lib/plugins/url-change-tracker";

const google_script = document.createElement("script");
google_script.setAttribute("async", true);
google_script.setAttribute(
  "src",
  "https://www.google-analytics.com/analytics.js"
);
document.head.appendChild(google_script);
