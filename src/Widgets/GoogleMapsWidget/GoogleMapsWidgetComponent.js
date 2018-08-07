import * as React from "react";
import * as Scrivito from "scrivito";
import googleMapsApiKey from "../../utils/googleMapsApiKey";
import googleMapsImageUrl from "../../utils/googleMapsImageUrl";

const maxWidth = 640;

class GoogleMapsWidgetComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      elementHeight: 0,
      elementWidth: 0,
      height: null,
      width: null,
    };

    this.outerDivRef = React.createRef();

    this.handleResize = this.handleResize.bind(this);
  }

  componentDidMount() {
    this.handleResize();
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  handleResize() {
    const elementWidth = this.outerDivRef.current.offsetWidth;
    const elementHeight = this.outerDivRef.current.offsetHeight;

    if (
      this.state.elementWidth !== elementWidth ||
      this.state.elementHeight !== elementHeight
    ) {
      let width = elementWidth;
      let height = elementHeight;

      if (width > maxWidth) {
        width = maxWidth;

        const factor = elementHeight / elementWidth;
        height = Math.round(maxWidth * factor);
      }

      this.setState({
        elementHeight,
        elementWidth,
        height,
        width,
      });
    }
  }

  render() {
    return (
      <div
        ref={this.outerDivRef}
        className="bg-map"
        style={{
          background: "no-repeat center / cover",
          backgroundImage: `url(${this.googleMapsImageUrl()})`,
        }}
      >
        <Widgets widget={this.props.widget} />
      </div>
    );
  }

  googleMapsImageUrl() {
    const address =
      this.props.widget.get("address") || "Brandenburg Gate, Berlin, Germany";
    const zoom = this.props.widget.get("zoom") || "15";
    const key = googleMapsApiKey();

    if (!this.state.height || !this.state.width) {
      // wait for the real height/width to not consume to much rate from google.
      return "";
    }

    // See all options at https://developers.google.com/maps/documentation/static-maps/intro
    const params = {
      size: `${this.state.width}x${this.state.height}`,
      scale: 2, // with scale 2 google maps allows more pixels.
      markers: `color:red|${address}`,
      zoom,
      ie: "UTF8",
    };

    if (key) {
      params.key = key;
    }

    return googleMapsImageUrl(params);
  }
}

const Widgets = Scrivito.connect(({ widget }) => {
  if (widget.get("showWidgets") !== "yes") {
    return null;
  }

  return (
    <div className="container">
      <div className="col-lg-3 col-md-4 col-sm-5">
        <Scrivito.ContentTag
          content={widget}
          attribute="content"
          className="card card-theme"
        />
      </div>
    </div>
  );
});

Scrivito.provideComponent("GoogleMapsWidget", GoogleMapsWidgetComponent);
