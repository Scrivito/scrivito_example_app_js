import * as React from "react";
import Helmet from "react-helmet";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);

    this.state = { hasError: false };
  }

  componentDidCatch(_error, _info) {
    this.setState({ hasError: true });
  }

  render() {
    if (!this.state.hasError) {
      return this.props.children;
    }

    return (
      <React.Fragment>
        <section
          className="bg-dark-image full-height"
          style={{ background: "no-repeat center / cover", backgroundImage }}
        >
          <div className="container">
            <div className="text-center">
              <h1 className="hero-bold">Sorry</h1>
            </div>
            <div className="text-center">
              <h2 className="hero-small">Something went wrong.</h2>
            </div>
            <div className="text-center">
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => window.location.reload(true)}
              >
                Please try again
                <i className="fa fa-angle-right fa-4" aria-hidden="true" />
              </button>
            </div>
          </div>
        </section>
        <Helmet meta={[{ name: "prerender-status-code", content: "500" }]} />
      </React.Fragment>
    );
  }
}

const backgroundImage = [
  "linear-gradient(rgba(46, 53, 60, 0.7), rgba(46, 53, 60, 0.7))",
  "url(https://unsplash.com/photos/wapAWmqpBJw/download)",
].join(", ");

export default ErrorBoundary;
