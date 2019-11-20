import "./polyfills";
import * as React from "react";
import * as ReactDOM from "react-dom";
import * as Scrivito from "scrivito";
import "./Objs";
import "./Widgets";
import App from "./App";
import "./config";
import "./assets/stylesheets/index.scss";

if (window.preloadDump) {
  Scrivito.preload(window.preloadDump).then(({ dumpLoaded }) => {
    dumpLoaded ? hydrateApp() : renderApp();
  });
} else {
  window.prerenderReady = false;
  renderApp();
  Scrivito.finishLoading().then(() => {
    window.prerenderReady = true;
  });
}

function renderApp() {
  ReactDOM.render(<App />, document.getElementById("application"));
}

function hydrateApp() {
  ReactDOM.hydrate(<App />, document.getElementById("application"), () =>
    Scrivito.updateContent()
  );
}
