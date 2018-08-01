import * as Scrivito from "scrivito";

function googleMapsApiKey() {
  const root = Scrivito.Obj.root();
  if (!root) {
    return "";
  }

  return root.get("googleMapsApiKey");
}

export default googleMapsApiKey;
