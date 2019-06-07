import * as React from "react";
import * as Scrivito from "scrivito";
import InPlaceEditingPlaceholder from "../../Components/InPlaceEditingPlaceholder";

class RedirectToUiComponent extends React.Component {
  componentDidMount() {
    Scrivito.load(() => {
      const reference = this.props.page.get("reference");
      const url = reference && Scrivito.urlFor(reference);

      return url;
    }).then(url => {
      if (!url) {
        return;
      }

      const scrivitoUiUrl = url.replace(/(\/\/[^/]+)/, "$1/scrivito");
      window.top.location.replace(scrivitoUiUrl);
    });
  }

  render() {
    const reference = this.props.page.get("reference");

    if (!reference) {
      return (
        <InPlaceEditingPlaceholder center>
          Select a reference in the redirect to ui page properties.
        </InPlaceEditingPlaceholder>
      );
    }

    return null;
  }
}

Scrivito.provideComponent("RedirectToUi", RedirectToUiComponent);
