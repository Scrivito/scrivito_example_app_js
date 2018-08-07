function isImage(object) {
  return object && object.objClass() === "Image" && object.get("blob");
}

export default isImage;
