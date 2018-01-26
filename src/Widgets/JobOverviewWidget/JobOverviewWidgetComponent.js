import InPlaceEditingPlaceholder from 'Components/InPlaceEditingPlaceholder';

Scrivito.provideComponent('JobOverviewWidget', ({ widget }) => {
  let jobsSearch = Scrivito.getClass('Job').all();
  if (widget.get('location')) {
    jobsSearch = jobsSearch.and('location', 'containsPrefix', widget.get('location'));
  }
  const jobs = [...jobsSearch];

  if (!jobs.length) {
    return (
      <InPlaceEditingPlaceholder center={ true }>
        There are no job pages. Create one using the page menu.
      </InPlaceEditingPlaceholder>
    );
  }

  return (
    <div className="row">
      {
        jobs.map((job, index) =>
          <div key={ `${job.id()}${index}` } className="col-sm-6">
            <Scrivito.LinkTag to={ job } className="box-card">
              <Scrivito.BackgroundImageTag
                tag="span"
                className="box-image"
                style={ {
                  background: { image: job.get('image') },
                } }
              />
              <span className="box-topic arrow-right">
                <h3 className="h3">{ job.get('title') }</h3>
                <span>
                  <i
                    className={ `fa ${job.get('location') ? 'fa-map-marker' : ''} fa-2x` }
                    aria-hidden="true"
                    title="location"
                  />
                  <span>{ job.get('location') }</span>
                </span>
                <i className="fa fa-angle-right" aria-hidden="true" />
              </span>
            </Scrivito.LinkTag>
          </div>
        )
      }
    </div>
  );
});
