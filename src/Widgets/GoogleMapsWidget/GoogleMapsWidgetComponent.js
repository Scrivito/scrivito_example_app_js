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
    const address =
      this.props.widget.get("address") || "Brandenburg Gate, Berlin, Germany";
    const zoom = this.props.widget.get("zoom") || "15";
    const apiKey = googleMapsApiKey();
    const mapStyle = this.props.widget.get("mapStyle") || "static";

    let style = {};

    if (mapStyle === "static") {
      style = {
        background: "no-repeat center / cover",
        backgroundImage: `url(${this.googleMapsImageUrl({
          address,
          apiKey,
          zoom,
        })})`,
      };
    }

    return (
      <div ref={this.outerDivRef} className="bg-map" style={style}>
        <InteractiveMap
          address={address}
          zoom={zoom}
          apiKey={apiKey}
          mapStyle={mapStyle}
        />
        <Widgets widget={this.props.widget} mapStyle={mapStyle} />
      </div>
    );
  }

  googleMapsImageUrl({ address, apiKey, zoom }) {
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

    if (apiKey) {
      params.key = apiKey;
    }

    return googleMapsImageUrl(params);
  }
}

function InteractiveMap({ address, apiKey, zoom, mapStyle }) {
  if (mapStyle !== "interactive") {
    return null;
  }

  const url = `https://www.google.com/maps/embed/v1/place?q=${address}&key=${apiKey}&zoom=${zoom}`;
  return <iframe frameBorder="0" style={{ border: 0 }} src={url} />;
}

const Widgets = Scrivito.connect(({ widget, mapStyle }) => {
  if (widget.get("showWidgets") !== "yes") {
    return null;
  }

  const containerClasses = ["container", "container-initial"];
  if (mapStyle === "interactive") {
    containerClasses.push("d-flex", "flex-row-reverse");
  }

  return (
    <div className={containerClasses.join(" ")}>
      <div className="col-lg-3 col-md-4 col-sm-5 container-initial">
        <Scrivito.ContentTag
          content={widget}
          attribute="content"
          className={"card card-theme"}
        />
      </div>
    </div>
  );
});

Scrivito.provideComponent("GoogleMapsWidget", GoogleMapsWidgetComponent);
