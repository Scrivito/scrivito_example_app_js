import SchemaDotOrg from 'Components/SchemaDotOrg';
import InPlaceEditingPlaceholder from 'Components/InPlaceEditingPlaceholder';

Scrivito.provideComponent('Job', ({ page }) => {
  return (
    <div>
      <section className="bg-white">
        <div className="container">
          <Scrivito.ContentTag tag="h1" className="h2" content={ page } attribute="title" />
          <JobLocation job={ page } />
          <Scrivito.ContentTag tag="div" content={ page } attribute="description" />
        </div>
      </section>
      <Scrivito.ContentTag tag="div" content={ page } attribute="body" />

      <SchemaDotOrg content={ page } />
    </div>
  );
});


const JobLocation = Scrivito.connect(({ job }) => {
  const locality = job.get('locationLocality');
  const region = job.get('locationRegion');
  const postalCode = job.get('locationPostalCode');
  const localityRegionPostalCode = [locality, region, postalCode].filter(n => n).join(' ');

  let address = [
    job.get('locationStreetAddress'),
    localityRegionPostalCode,
    job.get('locationCountry'),
  ].filter(n => n).join(', ');

  if (!address.length) {
    address = (
      <InPlaceEditingPlaceholder>
        Provide the location in the job page properties.
      </InPlaceEditingPlaceholder>
    );
  }

  return (
    <React.Fragment>
      <h2 className="h4">
        <i className="fa fa-map-marker fa-lg" aria-hidden="true" title="location" />
        { ' ' }
        { address }
      </h2>
    </React.Fragment>
  );
});
