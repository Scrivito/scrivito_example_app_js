import * as React from 'react';
import * as Scrivito from 'scrivito';
import InPlaceEditingPlaceholder from '../../Components/InPlaceEditingPlaceholder';

class RedirectComponent extends React.Component {
  componentDidMount() {
    Scrivito.load(() => {
      const link = this.props.page.get('link');
      const openInUi = this.props.page.get('openInUi');
      const url = link && Scrivito.urlFor(link);

      return { link, openInUi, url };
    }).then(({ link, openInUi, url }) => {
      if (!link) { return; }

      if (link.isInternal() && openInUi === 'yes') {
        window.top.location = url.replace(/(\/\/[^/]+)/, '$1/scrivito');
        return;
      }

      Scrivito.navigateTo(link);
    });
  }

  render() {
    const link = this.props.page.get('link');

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

Scrivito.provideComponent('Redirect', RedirectComponent);
