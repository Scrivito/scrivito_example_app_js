import * as React from "react";
import * as Scrivito from "scrivito";
import Helmet from "react-helmet";

import I404 from "../assets/images/404.svg";

class NotFoundErrorPage extends React.Component {
  componentDidMount() {
    const path = window.location.pathname;

    if (path !== "/404") {
      window.location.replace(`/404?path=${encodeURIComponent(path)}`);
    }
  }

  render() {
    return (
      <React.Fragment>
        <section className="page-404 full-height">
          <div className="container d-flex flex-xs-column d-sm-inline-flex">
            <img className="fobidden m-r-60" src={I404} alt="fobidden"/>
            <div className="text-left">
              <h1 className="ff-rubik white-text">404</h1>
              <h2 className="ff-rubik fs-28 fw-500 lh-33-px white-text m-b-60">
                Beklager.
                <br />
                Vi har trukket stikket ud på den her side.
              </h2>
              <Scrivito.LinkTag
                to={Scrivito.Obj.root()}
                className="ff-rubik fw-500 fs-20 lh-24-px orange-text"
              >
                Gå til forsiden.
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

export default () => {
  return (
    <Scrivito.NotFoundErrorPage>
      <ConnectedNotFoundErrorPage />
    </Scrivito.NotFoundErrorPage>
  );
};
