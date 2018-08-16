import formatDate from "../../utils/formatDate";
import { textExtractFromWidgetlist } from "../../utils/textExtract";

function dataFromJob(job) {
  return {
    "@context": "http://schema.org",
    "@type": "JobPosting",
    title: job.get("title"),
    datePosted: formatDate(job.get("datePosted"), "yyyy-mm-dd"),
    validThrough: formatDate(job.get("validThrough"), "yyyy-mm-dd"),
    description: textExtractFromWidgetlist(job.get("body")),
    employmentType: job.get("employmentType"),
    hiringOrganization: {
      "@type": "Organization",
      name: job.get("hiringOrganizationName"),
      sameAs: job.get("hiringOrganizationWebsite"),
    },
    jobLocation: locationFromJob(job),
  };
}

function locationFromJob(job) {
  return {
    "@type": "Place",
    name: job.get("locationName"),
    address: addressFromJob(job),
  };
}

function addressFromJob(job) {
  return {
    "@type": "PostalAddress",
    streetAddress: job.get("locationStreetAddress"),
    addressLocality: job.get("locationLocality"),
    addressRegion: job.get("locationRegion"),
    postalCode: job.get("locationPostalCode"),
    addressCountry: job.get("locationCountry"),
  };
}

export default dataFromJob;
