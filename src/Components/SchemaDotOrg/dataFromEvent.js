import * as Scrivito from "scrivito";
import formatDate from "../../utils/formatDate";
import urlFromBinary from "../../utils/urlFromBinary";

function dataFromEvent(event) {
  return {
    "@context": "http://schema.org",
    "@type": "Event",
    name: event.get("title"),
    url: Scrivito.urlFor(event),
    startDate: formatDate(event.get("date"), "yyyy-mm-dd"),
    location: locationFromEvent(event),
    image: urlFromBinary(event.get("image")),
    description: event.get("metaDataDescription"),
  };
}

function locationFromEvent(event) {
  return {
    "@type": "Place",
    name: event.get("locationName"),
    address: addressFromEvent(event),
  };
}

function addressFromEvent(event) {
  return {
    "@type": "PostalAddress",
    streetAddress: event.get("locationStreetAddress"),
    addressLocality: event.get("locationLocality"),
    addressRegion: event.get("locationRegion"),
    postalCode: event.get("locationPostalCode"),
    addressCountry: event.get("locationCountry"),
  };
}

export default dataFromEvent;
