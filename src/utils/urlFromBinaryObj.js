import * as Scrivito from "scrivito";

export function urlFromBinaryObj(binary) {
  if (!(binary instanceof Scrivito.Obj)) return null;

  const blob = binary.get("blob");
  if (!blob) return null;

  return blob.url() || null;
}
