import * as React from "react";
import * as Scrivito from "scrivito";
import formatDate from "../../utils/formatDate";
import InPlaceEditingPlaceholder from "../../Components/InPlaceEditingPlaceholder";
import SchemaDotOrg from "../../Components/SchemaDotOrg";

Scrivito.provideComponent("Job", ({ page }) => {
  return (
    <div>
      <section className="title-bgc">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <Scrivito.ContentTag
                tag="h1"
                className="h2"
                content={page}
                attribute="title"
              />
              <JobDatePosted datePosted={page.get("datePosted")} />
            </div>
            <div className="col-lg-5 details-title-box">
              <JobLocation job={page} />
              <JobEmploymentTypes
                employmentTypes={page.get("employmentType")}
              />
              <JobValidThrough validThrough={page.get("validThrough")} />
            </div>
          </div>
        </div>
      </section>
      <Scrivito.ContentTag tag="div" content={page} attribute="body" />
      <SchemaDotOrg content={page} />
    </div>
  );
});

const JobDatePosted = Scrivito.connect(({ datePosted }) => {
  if (!datePosted) {
    return (
      <InPlaceEditingPlaceholder block>
        Select a date in the job page properties.
      </InPlaceEditingPlaceholder>
    );
  }

  return <span>{formatDate(datePosted, "mm/dd/yyyy")}</span>;
});

const JobValidThrough = Scrivito.connect(({ validThrough }) => {
  if (!validThrough) {
    return (
      <InPlaceEditingPlaceholder block>
        Select a date in the job page properties.
      </InPlaceEditingPlaceholder>
    );
  }

  return (
    <h2 className="h5">
      <i className="fa fa-calendar-o fa-lg" aria-hidden="true" title="date" />{" "}
      <span className="font-weight-bold">Valid through: </span>
      {formatDate(validThrough, "mm/dd/yyyy")}
    </h2>
  );
});

const JobEmploymentTypes = Scrivito.connect(({ employmentTypes }) => {
  if (!employmentTypes || employmentTypes.length === 0) {
    return (
      <InPlaceEditingPlaceholder block>
        Select one or more employment types in the job page properties.
      </InPlaceEditingPlaceholder>
    );
  }

  const localizations = {
    FULL_TIME: "full-time",
    PART_TIME: "part-time",
    CONTRACTOR: "contractor",
    TEMPORARY: "temporary",
    INTERN: "intern",
    VOLUNTEER: "volunteer",
    PER_DIEM: "per diem",
    OTHER: "other",
  };

  const localizedTypes = employmentTypes.map(
    type => localizations[type] || type
  );

  return (
    <h2 className="h5 ">
      <i className="fa fa-clock-o fa-lg" aria-hidden="true" title="date" />
      <span className="font-weight-bold">Employment types: </span>{" "}
      {localizedTypes.join(", ")}
    </h2>
  );
});

const JobLocation = Scrivito.connect(({ job }) => {
  const locality = job.get("locationLocality");
  const region = job.get("locationRegion");
  const postalCode = job.get("locationPostalCode");
  const localityRegionPostalCode = [locality, region, postalCode]
    .filter(n => n)
    .join(" ");

  const address = [
    job.get("locationStreetAddress"),
    localityRegionPostalCode,
    job.get("locationCountry"),
  ]
    .filter(n => n)
    .join(", ");

  if (!address) {
    return (
      <InPlaceEditingPlaceholder block>
        Provide the location in the job page properties.
      </InPlaceEditingPlaceholder>
    );
  }

  return (
    <React.Fragment>
      <h2 className="h5 font-weight-bold">
        <i
          className="fa fa-map-marker fa-lg"
          aria-hidden="true"
          title="location"
        />{" "}
        {address}
      </h2>
    </React.Fragment>
  );
});
