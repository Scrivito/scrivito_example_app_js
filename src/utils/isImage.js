export function isImageObj(object) {
  return object && object.objClass() === "Image" && object.get("blob");
}
