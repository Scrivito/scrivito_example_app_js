function PlainLinkToRoot() {
  return (
    <Scrivito.LinkTag to={ Scrivito.Obj.root() } className="btn btn-primary">
      Go to mainpage<i className="fa fa-angle-right fa-4" aria-hidden="true" />
    </Scrivito.LinkTag>
  );
}

const LinkToRoot = Scrivito.connect(PlainLinkToRoot);

function NotFoundErrorPage() {
  const backgroundImage = [
    'linear-gradient(rgba(46, 53, 60, 0.7), rgba(46, 53, 60, 0.7))',
    'url(https://unsplash.com/photos/Bs0zgYkYEZw/download)',
  ].join(', ');

  return <Scrivito.NotFoundErrorPage>
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
          <LinkToRoot />
        </div>
      </div>
    </section>
  </Scrivito.NotFoundErrorPage>;
}

export default Scrivito.connect(NotFoundErrorPage);
