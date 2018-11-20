import "react";
import "react-dom";
import "scrivito";
import "./Objs";
import "./Widgets";
import "./config";
import prerenderObjs from "./prerenderContent/prerenderObjs";

const BLACKLIST_OBJ_CLASSES = ["Download", "Image", "Redirect", "Video"];

function prerenderContent() {
  return prerenderObjs(BLACKLIST_OBJ_CLASSES);
}

// Usage: window.prerenderContent().then(results => ...);
window.prerenderContent = prerenderContent;
