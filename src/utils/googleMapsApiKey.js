import * as Scrivito from "scrivito";

export function googleMapsApiKey() {
  const root = Scrivito.Obj.root();
  if (!root) return "";

  return root.get("googleMapsApiKey");
}
