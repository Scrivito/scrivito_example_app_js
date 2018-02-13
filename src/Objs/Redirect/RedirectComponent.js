import * as React from 'react';
import * as Scrivito from 'scrivito';

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
    return null;
  }
}

Scrivito.provideComponent('Redirect', RedirectComponent);
