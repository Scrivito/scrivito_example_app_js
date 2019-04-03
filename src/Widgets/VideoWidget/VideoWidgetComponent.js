import * as React from "react";
import * as Scrivito from "scrivito";
import urlFromBinary from "../../utils/urlFromBinary";
import videoPlaceholder from "./videoPlaceholder";
import PlayIcon from "../../assets/images/play_icon.svg";

Scrivito.provideComponent("VideoWidget", ({ widget }) => {
  const videoUrl = urlFromBinary(widget.get("source"));
  const showText = widget.get("showText");
  const playText = widget.get("playText");
  const textPostion = widget.get("textPostion");
  const color = widget.get("color");

  if (!videoUrl && !Scrivito.isInPlaceEditingActive()) {
    return null;
  }

  const posterUrl = urlFromBinary(widget.get("poster"));
  const src = posterUrl ? videoUrl : `${videoUrl}#t=0.01`;

  let style = {};
  if (Scrivito.isInPlaceEditingActive() && !videoUrl && !posterUrl) {
    style = videoPlaceholder;
  }

  const playVideo = () => {
    const elem = document.getElementById("video_player");
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) {
      elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
      elem.msRequestFullscreen();
    }
    elem.style.display = "block";
    elem.play();
  };

  return (
    <div className={`video-widget ${color}`}>
      <div className="poster">
        <img src={posterUrl} />
        <div className="btn-play">
          {showText && textPostion === "left" && <div>{playText}</div>}
          <button title="Play" onClick={playVideo}>
            <img src={PlayIcon} />
          </button>
          {showText && textPostion === "left" && <div>{playText}</div>}
        </div>
      </div>
      <Scrivito.ContentTag
        id="video_player"
        tag="video"
        src={src}
        content={widget}
        attribute="source"
        poster={posterUrl}
        controls
        width="100%"
        style={style}
      />
    </div>
  );
});
