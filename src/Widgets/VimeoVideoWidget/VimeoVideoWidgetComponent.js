import * as React from "react";
import * as Scrivito from "scrivito";
import InPlaceEditingPlaceholder from "../../Components/InPlaceEditingPlaceholder";

class VimeoVideoWidgetComponent extends React.Component {
  render() {
    const heightPercentageValue = 100;
    return (
      <div
        className="text-center content-div"
        style={{ paddingTop: `${this.aspectRatio(heightPercentageValue)}%` }}
      >
        <PlaceholderOrVimeoComponent
          vimeoVideoId={this.props.widget.get("vimeoVideoId")}
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

function PlaceholderOrVimeoComponent({ vimeoVideoId, width, height }) {
  if (!vimeoVideoId) {
    return (
      <InPlaceEditingPlaceholder>
        Provide a Vimeo video ID in the widget properties.
      </InPlaceEditingPlaceholder>
    );
  }

  return (
    <iframe
      src={`https://player.vimeo.com/video/${vimeoVideoId}`}
      className="content-iframe"
      frameBorder="0"
      allowFullScreen="true"
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
    />
  );
}

Scrivito.provideComponent("VimeoVideoWidget", VimeoVideoWidgetComponent);
