import * as React from "react";
import * as Scrivito from "scrivito";

class RedirectToUiComponent extends React.Component {
  componentDidMount() {
    const scrivitoUiUrl = `https://edit.scrivito.com/${window.location.origin}`;
    window.top.location.replace(scrivitoUiUrl);
  }

  render() {
    return null;
  }
}

Scrivito.provideComponent("RedirectToUi", RedirectToUiComponent);
