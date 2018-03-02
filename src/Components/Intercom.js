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

  constructor(props) {
    super(props);

    this.state = { intercomAppId: '' };
  }

  componentDidMount() {
    Scrivito.load(() => Intercom.getIntercomAppId()).then(intercomAppId => {
      if (intercomAppId) {
        window.intercomSettings = {
          app_id: intercomAppId,
        };
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
        <script async src='/intercom.js'></script>
      </Helmet>
    );
  }
}

export default Scrivito.connect(Intercom);
