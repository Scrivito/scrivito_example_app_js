import "scrivito-youtube-video-widget";
import "scrivito-youtube-video-widget/index.css";

function importAll(r) {
  r.keys().forEach(r);
}

// import all js files under src/Widgets/
importAll(require.context("./", true, /\.js$/));
