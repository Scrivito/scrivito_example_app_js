import * as React from "react";
import * as Scrivito from "scrivito";
import * as ReactDOM from "react-dom/client";

import "./Objs";
import "./Objs/editingConfigs";
import "./Widgets";
import "./Widgets/editingConfigs";
import "./Data";
import "./Data/editingConfigs";
import { configure } from "./config";
import "./Components/ScrivitoExtensions";
import "./assets/stylesheets/index.scss";

ReactDOM.createRoot(document.createElement("div")).render(
  <Scrivito.Extensions />
);
configure();
