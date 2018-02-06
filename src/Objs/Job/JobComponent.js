import * as Scrivito from 'scrivito';

Scrivito.provideComponent('Job', ({ page }) => {
  return (
    <div>
      <section className="bg-white">
        <div className="container">
          <Scrivito.ContentTag tag="h1" className="h2" content={ page } attribute="title" />
          <h2 className="h4">
            <i className="fa fa-map-marker fa-lg" aria-hidden="true" title="location" />
            { ' ' }
            <Scrivito.ContentTag tag="span" content={ page } attribute="location" />
          </h2>
        </div>
      </section>
      <Scrivito.ContentTag tag="div" content={ page } attribute="body" />
    </div>
  );
});
