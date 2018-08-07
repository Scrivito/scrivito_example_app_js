import * as Scrivito from "scrivito";

const Video = Scrivito.provideObjClass("Video", {
  attributes: {
    blob: "binary",
    tags: "stringlist",
  },
});

export default Video;
