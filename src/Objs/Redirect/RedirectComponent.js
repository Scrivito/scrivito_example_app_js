import * as React from "react";
import * as Scrivito from "scrivito";
import InPlaceEditingPlaceholder from "../../Components/InPlaceEditingPlaceholder";

class RedirectComponent extends React.Component {
  componentDidMount() {
    Scrivito.load(() => {
      const link = this.props.page.get("link");
      const url = link && Scrivito.urlFor(link);

      return { link, url };
    }).then(({ link, url }) => {
      if (!link) return;

      if (link.isExternal()) {
        window.top.location.replace(url);
      } else {
        window.location.replace(url);
      }
    });
  }

  render() {
    const link = this.props.page.get("link");

    if (!link) {
      return (
        <InPlaceEditingPlaceholder center>
          Select a link in the redirect page properties.
        </InPlaceEditingPlaceholder>
      );
    }

    return null;
  }
}

Scrivito.provideComponent("Redirect", RedirectComponent);
