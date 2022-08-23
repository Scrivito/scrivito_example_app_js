import * as React from "react";
import * as Scrivito from "scrivito";
import * as ReactDOM from "react-dom";

import "./Objs";
import "./Objs/editingConfigs";
import "./Widgets";
import "./Widgets/editingConfigs";
import { configure } from "./config";
import "./Components/ScrivitoExtensions";
import "./assets/stylesheets/index.scss";

ReactDOM.render(<Scrivito.Extensions />, document.createElement("div"));
configure();
