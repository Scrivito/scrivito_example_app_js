import * as React from "react";
import * as Scrivito from "scrivito";
import InPlaceEditingPlaceholder from "../../Components/InPlaceEditingPlaceholder";

Scrivito.provideComponent("YoutubeVideoWidget", ({ widget }) => {
  const youtubeVideoId = widget.get("youtubeVideoId");
  const aspectRatio = aspectRatioToFloat(widget.get("aspectRatio"));

  if (!youtubeVideoId) {
    return (
      <InPlaceEditingPlaceholder center>
        Provide a YouTube video ID in the widget properties.
      </InPlaceEditingPlaceholder>
    );
  }

  return (
    <div
      style={{
        position: "relative",
        paddingTop: `${100 / aspectRatio}%`,
      }}
    >
      <iframe
        src={`https://www.youtube.com/embed/${youtubeVideoId}`}
        className="fullsize-iframe"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
        webkitallowfullscreen="true"
        mozallowfullscreen="true"
      />
    </div>
  );
});

function aspectRatioToFloat(aspectRatio) {
  switch (aspectRatio) {
    case "21:9":
      return 21 / 9;
    case "16:9":
      return 16 / 9;
    case "4:3":
      return 4 / 3;
    case "1:1":
      return 1;
    case "3:4":
      return 3 / 4;
    case "9:16":
      return 9 / 16;
    default:
      return 16 / 9;
  }
}
