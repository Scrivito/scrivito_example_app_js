function isVideoObj(obj) {
  if (!obj) {
    return false;
  }

  const contentType = obj.contentType();
  if (!contentType) {
    return false;
  }

  return contentType.startsWith("video/");
}

export default isVideoObj;
