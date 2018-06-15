import * as React from 'react';
import * as Scrivito from 'scrivito';
import formatDate from '../../utils/formatDate';
import InPlaceEditingPlaceholder from '../../Components/InPlaceEditingPlaceholder';
import SchemaDotOrg from '../../Components/SchemaDotOrg';

Scrivito.provideComponent('Event', ({ page }) =>
  <div>
    <section className="title-bgc">
      <div className="container">
        <div className="row">
            <div className="col-lg-8 d-flex align-items-center">
                <Scrivito.ContentTag tag="h1" className="h2" content={ page } attribute="title" />
            </div>
            <div className="col-lg-4 details-title-box">
                <h2 className="h5">
                  <i className="fa fa-calendar fa-lg" aria-hidden="true" title="date" />
                  { ' ' }
                  <EventDate date={ page.get('date') } />
                  <EventLocation event={ page } />
                </h2>
            </div>
        </div>
      </div>
    </section>
    <Scrivito.ContentTag tag="div" content={ page } attribute="body" />
    <SchemaDotOrg content={ page } />
  </div>
);

function EventDate({ date }) {
  if (!date) {
    return (
      <InPlaceEditingPlaceholder>
        Select a date in the event page properties.
      </InPlaceEditingPlaceholder>
    );
  }

  return formatDate(date, 'mm/dd/yyyy');
}

const EventLocation = Scrivito.connect(({ event }) => {
  const locality = event.get('locationLocality');
  const region = event.get('locationRegion');
  const postalCode = event.get('locationPostalCode');
  const localityRegionPostalCode = [locality, region, postalCode].filter(n => n).join(' ');

  const address = [
    event.get('locationName'),
    event.get('locationStreetAddress'),
    localityRegionPostalCode,
    event.get('locationCountry'),
  ].filter(n => n);

  if (!address.length) {
    return (
      <InPlaceEditingPlaceholder>
        Provide the location in the event page properties.
      </InPlaceEditingPlaceholder>
    );
  }

  return (
    <React.Fragment>
      <div className="location-title">
          <h2 className="h5 font-weight-bold">
              <i className="fa fa-map-marker fa-lg" aria-hidden="true" title="location" />
              { ' ' }
              Location
          </h2>
        { address.map((line, index) => <span key={ index }>{ line } <br /></span>) }
      </div>
    </React.Fragment>
  );
});
