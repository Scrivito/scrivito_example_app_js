import * as React from 'react';
import * as Scrivito from 'scrivito';
import Helmet from 'react-helmet';

class Intercom extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isIntercomInstalled: false,
    };
  }

  componentDidMount() {
    Scrivito.load(() => getIntercomAppId()).then(intercomAppId => {
      if (intercomAppId) {
        installIntercom(intercomAppId);
        this.setState({ isIntercomInstalled: true });
      }
    });
  }

  render() {
    if (!this.state.isIntercomInstalled) {
      return null;
    }

    return (
      <Helmet>
        <script
          async
          src={ `https://widget.intercom.io/widget/${getIntercomAppId()}` }
        />
      </Helmet>
    );
  }
}

function installIntercom(appId) {
  if (typeof window.Intercom === 'function') {
    window.Intercom('reattach_activator');
    window.Intercom('update', { app_id: appId });
  } else {
    const intercom = (...args) => intercom.c(args);
    intercom.q = [];
    intercom.c = args => intercom.q.push(args);

    window.Intercom = intercom;

    window.Intercom('boot', { app_id: appId });
  }
}

function getIntercomAppId() {
  const rootPage = Scrivito.Obj.root();

  if (!rootPage) {
    return;
  }

  return rootPage.get('intercomAppId');
}

export default Scrivito.connect(Intercom);
