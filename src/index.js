import * as React from "react";
import * as ReactDOM from "react-dom/client";
import * as Scrivito from "scrivito";
import "./Objs";
import "./Widgets";
import "./Data";
import { App } from "./App";
import { configure } from "./config";
import "./assets/stylesheets/index.scss";

configure();

if (window.preloadDump) {
  Scrivito.preload(window.preloadDump).then(({ dumpLoaded }) => {
    delete window.preloadDump;
    dumpLoaded ? hydrateApp() : renderApp();
  });
} else {
  renderApp();
}

function renderApp() {
  ReactDOM.createRoot(document.getElementById("application")).render(<App />);
}

function hydrateApp() {
  ReactDOM.hydrateRoot(
    document.getElementById("application"),
    <App
      appWrapperRef={(el) => {
        if (el) Scrivito.updateContent();
      }}
    />
  );
}

if (Scrivito.isEditorLoggedIn()) {
  import("./Objs/editingConfigs");
  import("./Widgets/editingConfigs");
  import("./Data/editingConfigs");
}
