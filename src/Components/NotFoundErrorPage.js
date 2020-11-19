import * as React from "react";
import * as Scrivito from "scrivito";
import { Helmet } from "react-helmet-async";

class NotFoundErrorPage extends React.Component {
  componentDidMount() {
    const statusCode = "status-code=404-not-found";
    const { search } = window.location;

    if (!Scrivito.isEditorLoggedIn() && !search.includes(statusCode)) {
      window.location.search = search ? `${search}&${statusCode}` : statusCode;
    }
  }

  render() {
    const backgroundImage = [
      "linear-gradient(rgba(46, 53, 60, 0.7), rgba(46, 53, 60, 0.7))",
      "url(https://long-lasting-assets.scrivitojs.com/scrivito_example_app_js/404_not_found.jpeg)",
    ].join(", ");

    return (
      <React.Fragment>
        <section
          className="bg-dark-image full-height"
          style={{ background: "no-repeat center / cover", backgroundImage }}
        >
          <div className="container">
            <div className="text-center">
              <h1 className="hero-bold">Ooops</h1>
            </div>
            <div className="text-center">
              <h2 className="hero-small">
                The page you are looking for does not exist.
              </h2>
            </div>
            <div className="text-center">
              <Scrivito.LinkTag
                to={Scrivito.Obj.root()}
                className="btn btn-primary"
              >
                Go to mainpage{" "}
                <i className="fa fa-angle-right fa-4" aria-hidden="true" />
              </Scrivito.LinkTag>
            </div>
          </div>
        </section>
        <Helmet meta={[{ name: "prerender-status-code", content: "404" }]} />
      </React.Fragment>
    );
  }
}

const ConnectedNotFoundErrorPage = Scrivito.connect(NotFoundErrorPage);

export default function WrappedNotFoundErrorPage() {
  return (
    <Scrivito.NotFoundErrorPage>
      <ConnectedNotFoundErrorPage />
    </Scrivito.NotFoundErrorPage>
  );
}
