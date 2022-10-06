import * as Scrivito from "scrivito";

export function configureWindowScrivito() {
  if (typeof window === "undefined") return;

  // set Scrivito as a global to allow easier debugging in the javascript console.
  window.Scrivito = Scrivito;
}
