import * as Scrivito from "scrivito";

export function isImageObj(obj) {
  return (
    obj instanceof Scrivito.Obj && obj.objClass() === "Image" && obj.get("blob")
  );
}
