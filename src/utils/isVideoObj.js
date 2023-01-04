import * as Scrivito from "scrivito";

export function isVideoObj(obj) {
  if (!(obj instanceof Scrivito.Obj)) return false;

  const contentType = obj.contentType();
  if (!contentType) return false;

  return contentType.startsWith("video/");
}
