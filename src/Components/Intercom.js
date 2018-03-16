import * as React from 'react';
import * as Scrivito from 'scrivito';
import Helmet from 'react-helmet';

class Intercom extends React.Component {
  static getIntercomAppId() {
    const rootPage = Scrivito.Obj.root();

    if (!rootPage) {
      return;
    }

    return rootPage.get('intercomAppId');
  }

  static bindFakeIntercom() {
    const fakeIntercom = (...args) => fakeIntercom.c(args);
    fakeIntercom.q = [];
    fakeIntercom.c = args => fakeIntercom.q.push(args);
    window.Intercom = fakeIntercom;
  }

  constructor(props) {
    super(props);

    this.state = { intercomAppId: '' };
  }

  componentDidMount() {
    Scrivito.load(() => Intercom.getIntercomAppId()).then(intercomAppId => {
      if (intercomAppId) {
        Intercom.bindFakeIntercom();
        window.Intercom('reattach_activator');
        window.Intercom('update', { app_id: intercomAppId });

        this.setState({ intercomAppId });
      }
    });
  }

  render() {
    if (!this.state.intercomAppId) {
      return null;
    }

    return (
      <Helmet>
        <script async src={ `https://widget.intercom.io/widget/${this.state.intercomAppId}` } />
      </Helmet>
    );
  }
}

export default Scrivito.connect(Intercom);
