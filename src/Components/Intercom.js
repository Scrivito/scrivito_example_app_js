import * as React from "react";
import * as Scrivito from "scrivito";
import Helmet from "react-helmet";

class Intercom extends React.Component {
  constructor(props) {
    super(props);

    this.state = { intercomAppId: "" };
  }

  componentDidMount() {
    Scrivito.load(() => {
      const rootPage = Scrivito.Obj.root();
      if (!rootPage) {
        return;
      }
      return rootPage.get("intercomAppId");
    }).then(intercomAppId => {
      if (intercomAppId) {
        Scrivito.finishLoading().then(() => {
          installIntercom(intercomAppId);
          this.setState({ intercomAppId });
        });
      }
    });
  }

  render() {
    if (!this.state.intercomAppId) {
      return null;
    }

    return (
      <Helmet>
        <script
          async
          src={`https://widget.intercom.io/widget/${this.state.intercomAppId}`}
        />
      </Helmet>
    );
  }
}

function installIntercom(appId) {
  if (typeof window.Intercom === "function") {
    window.Intercom("reattach_activator");
    window.Intercom("update", { app_id: appId });
  } else {
    const intercom = (...args) => intercom.c(args);
    intercom.q = [];
    intercom.c = args => intercom.q.push(args);

    window.Intercom = intercom;

    window.Intercom("boot", { app_id: appId });
  }
}

export default Scrivito.connect(Intercom);
