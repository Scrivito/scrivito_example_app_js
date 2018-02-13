import * as React from 'react';
import * as Scrivito from 'scrivito';

class RedirectComponent extends React.Component {
  componentDidMount() {
    Scrivito.load(() => {
      return ({
        link: this.props.page.get('link'),
        openUi: this.props.page.get('openUi'),
      });
    }).then(({ link, openUi }) => {
      if (link) {
        Scrivito.navigateTo(link);
      } else if (openUi === 'yes') {
        window.top.location = '/scrivito/';
      } else {
        console.log('No redirect target given!');
      }
    });
  }

  render() {
    return null;
  }
}

Scrivito.provideComponent('Redirect', RedirectComponent);
