import * as React from "react";
import * as Scrivito from "scrivito";
import InPlaceEditingPlaceholder from "../../Components/InPlaceEditingPlaceholder";

Scrivito.provideComponent("JobOverviewWidget", ({ widget }) => {
  let jobsSearch = Scrivito.getClass("Job").all();
  if (widget.get("locationLocality")) {
    jobsSearch = jobsSearch.and(
      "locationLocality",
      "containsPrefix",
      widget.get("locationLocality")
    );
  }
  const jobs = [...jobsSearch];

  if (!jobs.length) {
    return (
      <InPlaceEditingPlaceholder center>
        There are no job pages. Create one using the page menu.
      </InPlaceEditingPlaceholder>
    );
  }

  return (
    <div className="row">
      {jobs.map((job, index) => (
        <JobItem key={job.id()} job={job} index={index} />
      ))}
    </div>
  );
});

const JobItem = Scrivito.connect(({ job }) => {
  const location = [job.get("locationLocality"), job.get("locationCountry")]
    .filter(n => n)
    .join(", ");

  return (
    <div className="col-sm-6">
      <Scrivito.LinkTag to={job} className="box-card">
        <Scrivito.BackgroundImageTag
          tag="span"
          className="box-image"
          style={{
            background: { image: job.get("image") },
          }}
        />
        <span className="box-topic arrow-right">
          <h3 className="h3">{job.get("title")}</h3>
          <span>
            <i
              className={`fa ${location ? "fa-map-marker" : ""} fa-2x`}
              aria-hidden="true"
              title="location"
            />
            <span>{location}</span>
          </span>
          <i className="fa fa-angle-right" aria-hidden="true" />
        </span>
      </Scrivito.LinkTag>
    </div>
  );
});
