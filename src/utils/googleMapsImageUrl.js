const separator = "|";

// Some styling sources:
// * https://mapstyle.withgoogle.com
// * https://snazzymaps.com
const googleStyles = [
  {
    elementType: "geometry",
    stylers: [{ color: "#212121" }],
  },
  {
    elementType: "labels.icon",
    stylers: [{ visibility: "off" }],
  },
  {
    elementType: "labels.text.fill",
    stylers: [{ color: "#757575" }],
  },
  {
    elementType: "labels.text.stroke",
    stylers: [{ color: "#212121" }],
  },
  {
    featureType: "administrative",
    elementType: "geometry",
    stylers: [{ color: "#757575" }],
  },
  {
    featureType: "administrative.country",
    elementType: "labels.text.fill",
    stylers: [{ color: "#9e9e9e" }],
  },
  {
    featureType: "administrative.land_parcel",
    stylers: [{ visibility: "off" }],
  },
  {
    featureType: "administrative.locality",
    elementType: "labels.text.fill",
    stylers: [{ color: "#bdbdbd" }],
  },
  {
    featureType: "poi",
    elementType: "labels.text.fill",
    stylers: [{ color: "#757575" }],
  },
  {
    featureType: "poi.park",
    elementType: "geometry",
    stylers: [{ color: "#181818" }],
  },
  {
    featureType: "poi.park",
    elementType: "labels.text.fill",
    stylers: [{ color: "#616161" }],
  },
  {
    featureType: "poi.park",
    elementType: "labels.text.stroke",
    stylers: [{ color: "#1b1b1b" }],
  },
  {
    featureType: "road",
    elementType: "geometry.fill",
    stylers: [{ color: "#2c2c2c" }],
  },
  {
    featureType: "road",
    elementType: "labels.text.fill",
    stylers: [{ color: "#8a8a8a" }],
  },
  {
    featureType: "road.arterial",
    elementType: "geometry",
    stylers: [{ color: "#373737" }],
  },
  {
    featureType: "road.highway",
    elementType: "geometry",
    stylers: [{ color: "#3c3c3c" }],
  },
  {
    featureType: "road.highway.controlled_access",
    elementType: "geometry",
    stylers: [{ color: "#4e4e4e" }],
  },
  {
    featureType: "road.local",
    elementType: "labels.text.fill",
    stylers: [{ color: "#616161" }],
  },
  {
    featureType: "transit",
    elementType: "labels.text.fill",
    stylers: [{ color: "#757575" }],
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [{ color: "#356a8c" }],
  },
  {
    featureType: "water",
    elementType: "labels.text.fill",
    stylers: [{ color: "#3d3d3d" }],
  },
];

function isColor(value) {
  return /^#[0-9a-f]{6}$/i.test(value.toString());
}

function toColor(value) {
  return `0x${value.slice(1)}`;
}

function computeTag(featureType, elementType) {
  if (!featureType && !elementType) {
    return "feature:all";
  }

  const target = [];

  if (featureType) {
    target.push(`feature:${featureType}`);
  }
  if (elementType) {
    target.push(`element:${elementType}`);
  }

  return target.join(separator);
}

function computeStyler(stylers) {
  const styles = [];

  stylers.forEach(styler => {
    const key = Object.keys(styler)[0]; // there is only one per element
    const value = styler[key];
    const normalizedValue = isColor(value) ? toColor(value) : value;

    styles.push(`${key}:${normalizedValue}`);
  });

  return styles.join(separator);
}

function computeStyle(item) {
  const target = computeTag(item.featureType, item.elementType);
  const styler = computeStyler(item.stylers);

  return target + separator + styler;
}

function stylingParamsArray() {
  return googleStyles.map(i => computeStyle(i)).map(i => ["style", i]);
}

function googleMapsImageUrl(params) {
  const paramsArray = Object.entries(params).concat(stylingParamsArray());
  const flattenParams = paramsArray
    .map(([key, value]) => `${key}=${value}`)
    .join("&");
  const uri = `https://maps.google.com/maps/api/staticmap?${flattenParams}`;

  return encodeURI(uri);
}

export default googleMapsImageUrl;
