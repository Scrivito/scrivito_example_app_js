import * as React from "react";
import * as Scrivito from "scrivito";

class RedirectToUiComponent extends React.Component {
  componentDidMount() {
    const scrivitoUiUrl = `${window.location.origin}/scrivito/`;
    window.top.location.replace(scrivitoUiUrl);
  }

  render() {
    return null;
  }
}

Scrivito.provideComponent("RedirectToUi", RedirectToUiComponent);
