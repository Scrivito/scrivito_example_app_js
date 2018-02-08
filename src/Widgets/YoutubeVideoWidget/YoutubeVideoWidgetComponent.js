import * as React from 'react';
import * as Scrivito from 'scrivito';
import InPlaceEditingPlaceholder from '../../Components/InPlaceEditingPlaceholder';

class YoutubeVideoWidgetComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      elementWidth: 0,
    };

    this.handleResize = this.handleResize.bind(this);
  }

  componentDidMount() {
    this.handleResize();
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize() {
    const elementWidth = this.outerDiv.offsetWidth;

    if (this.state.elementWidth !== elementWidth) {
      this.setState({ elementWidth });
    }
  }

  render() {
    return (
      <div
        ref={ e => { this.outerDiv = e; } }
        className="text-center"
      >
        <PlaceholderOrYoutubeComponent
          youtubeVideoId={ this.props.widget.get('youtubeVideoId') }
          width={ this.state.elementWidth }
          height={ this.state.elementWidth / this.aspectRatio() }
        />
      </div>
    );
  }

  aspectRatio() {
    switch (this.props.widget.get('aspectRatio')) {
      case '21:9': return 21 / 9;
      case '16:9': return 16 / 9;
      case '4:3': return 4 / 3;
      case '1:1': return 1;
      case '3:4': return 3 / 4;
      case '9:16': return 9 / 16;
      default: return 16 / 9;
    }
  }
}

function PlaceholderOrYoutubeComponent({ youtubeVideoId, width, height }) {
  if (!youtubeVideoId) {
    return (
      <InPlaceEditingPlaceholder>
        Provide a YouTube video ID in the widget properties.
      </InPlaceEditingPlaceholder>
    );
  }

  return (
    <iframe
      width={ width }
      height={ height }
      src={ `https://www.youtube.com/embed/${youtubeVideoId}` }
      frameBorder="0"
      gesture="media"
      allowFullScreen="true"
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
    />
  );
}

Scrivito.provideComponent('YoutubeVideoWidget', YoutubeVideoWidgetComponent);
