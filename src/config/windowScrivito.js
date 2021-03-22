import * as Scrivito from "scrivito";

export function configureWindowScrivito() {
  // set Scrivito as a global to allow easier debugging in the javascript console.
  window.Scrivito = Scrivito;
}
