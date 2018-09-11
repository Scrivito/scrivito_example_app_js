const videoContentTypes = ["video/mp4"];

function isVideo(object) {
  return (
    object &&
    typeof object.contentType === "function" &&
    videoContentTypes.includes(object.contentType())
  );
}

export default isVideo;
