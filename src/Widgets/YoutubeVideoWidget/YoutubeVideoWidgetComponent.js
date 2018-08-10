import * as React from "react";
import * as Scrivito from "scrivito";
import InPlaceEditingPlaceholder from "../../Components/InPlaceEditingPlaceholder";

class YoutubeVideoWidgetComponent extends React.Component {
  render() {
    const heightPercentageValue = 100;
    return (
      <div
        className="text-center content-div"
        style={{ paddingTop: `${this.aspectRatio(heightPercentageValue)}%` }}
      >
        <PlaceholderOrYoutubeComponent
          youtubeVideoId={this.props.widget.get("youtubeVideoId")}
        />
      </div>
    );
  }

  aspectRatio(heightValue) {
    switch (this.props.widget.get("aspectRatio")) {
      case "21:9":
        return heightValue / (21 / 9);
      case "16:9":
        return heightValue / (16 / 9);
      case "4:3":
        return heightValue / (4 / 3);
      case "1:1":
        return heightValue;
      case "3:4":
        return heightValue / (3 / 4);
      case "9:16":
        return heightValue / (9 / 16);
      default:
        return heightValue / (16 / 9);
    }
  }
}

function PlaceholderOrYoutubeComponent({ youtubeVideoId }) {
  if (!youtubeVideoId) {
    return (
      <InPlaceEditingPlaceholder>
        Provide a YouTube video ID in the widget properties.
      </InPlaceEditingPlaceholder>
    );
  }

  return (
    <iframe
      src={`https://www.youtube.com/embed/${youtubeVideoId}`}
      className="content-iframe"
      frameBorder="0"
      allow="autoplay; encrypted-media"
      allowFullScreen="true"
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
    />
  );
}

Scrivito.provideComponent("YoutubeVideoWidget", YoutubeVideoWidgetComponent);
