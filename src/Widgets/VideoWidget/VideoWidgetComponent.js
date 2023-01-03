import * as React from "react";
import * as Scrivito from "scrivito";
import { urlFromBinaryObj } from "../../utils/urlFromBinary";
import { videoPlaceholder } from "./videoPlaceholder";

Scrivito.provideComponent("VideoWidget", ({ widget }) => {
  const videoUrl = urlFromBinaryObj(widget.get("source"));

  if (!videoUrl && !Scrivito.isInPlaceEditingActive()) {
    return null;
  }

  const posterUrl = urlFromBinaryObj(widget.get("poster"));
  const src = posterUrl ? videoUrl : `${videoUrl}#t=0.01`;

  let style = {};
  if (Scrivito.isInPlaceEditingActive() && !videoUrl && !posterUrl) {
    style = videoPlaceholder;
  }

  return (
    <Scrivito.ContentTag
      tag="video"
      src={src}
      content={widget}
      attribute="source"
      poster={posterUrl}
      controls
      width="100%"
      style={style}
    />
  );
});
