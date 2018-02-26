import * as React from 'react';
import * as Scrivito from 'scrivito';
import Helmet from 'react-helmet';

class NotFoundErrorPage extends React.Component {
  componentWillMount() {
    const path = window.location.pathname;

    if (path !== '/404') {
      window.location.replace(`/404?path=${encodeURIComponent(path)}`);
    }
  }

  render() {
    const backgroundImage = [
      'linear-gradient(rgba(46, 53, 60, 0.7), rgba(46, 53, 60, 0.7))',
      'url(https://unsplash.com/photos/Bs0zgYkYEZw/download)',
    ].join(', ');

    return (
      <React.Fragment>
        <section
          className="bg-dark-image full-height"
          style={ { background: 'no-repeat center / cover', backgroundImage } }
        >
          <div className="container">
            <div className="text-center"><h1 className="hero-bold">Ooops</h1></div>
            <div className="text-center">
              <h2 className="hero-small">The page you are looking for does not exist.</h2>
            </div>
            <div className="text-center">
              <LinkTo obj={ Scrivito.Obj.root() }/>
            </div>
          </div>
        </section>
        <Helmet meta={ [{ name: 'prerender-status-code', content: '404' }] } />
      </React.Fragment>
    );
  }
}

function LinkTo({ obj }) {
  return (
    <Scrivito.LinkTag to={ obj } className="btn btn-primary">
      Go to mainpage<i className="fa fa-angle-right fa-4" aria-hidden="true" />
    </Scrivito.LinkTag>
  );
}

export default Scrivito.connect(() => {
  return (
    <Scrivito.NotFoundErrorPage>
      <NotFoundErrorPage />
    </Scrivito.NotFoundErrorPage>
  );
});
