import * as React from "react";
import * as Scrivito from "scrivito";
import Helmet from "react-helmet";
import cookieConsentGiven from "../utils/cookieConsentGiven";

class Tracking extends React.Component {
  constructor(props) {
    super(props);

    this.state = { enableTracking: false };
  }

  componentDidMount() {
    cookieConsentGiven().then(() => this.setState({ enableTracking: true }));
  }

  render() {
    return (
      this.state.enableTracking && (
        <Helmet>
          <script async src="/tracking.js" />
        </Helmet>
      )
    );
  }
}

export default Scrivito.connect(Tracking);
