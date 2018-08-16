import * as React from "react";
import * as Scrivito from "scrivito";
import InPlaceEditingPlaceholder from "../../Components/InPlaceEditingPlaceholder";
import SchemaDotOrg from "../../Components/SchemaDotOrg";

Scrivito.provideComponent("AddressWidget", ({ widget }) => {
  return (
    <div>
      {widget.get("showLogo") !== "no" && <Logo />}
      <address>
        <Address addressWidget={widget} />
        <Table
          phone={widget.get("phone")}
          fax={widget.get("fax")}
          email={widget.get("email")}
        />
        <SchemaDotOrg content={widget} />
      </address>
      {widget.get("showBorderBottom") === "yes" && <div className="b-bottom" />}
    </div>
  );
});

const Logo = Scrivito.connect(() => {
  const root = Scrivito.Obj.root();
  if (!root) {
    return null;
  }

  const logo = root.get("logoDark");
  if (!logo) {
    return null;
  }

  return (
    <Scrivito.LinkTag to={root}>
      <Scrivito.ImageTag content={logo} className="logo" alt="Logo" />
    </Scrivito.LinkTag>
  );
});

const Address = Scrivito.connect(({ addressWidget }) => {
  let localityRegionPostalCode;

  if (addressWidget.get("addressFormat") === "GER") {
    localityRegionPostalCode = [
      addressWidget.get("locationPostalCode"),
      addressWidget.get("locationLocality"),
      addressWidget.get("locationRegion"),
    ];
  } else {
    localityRegionPostalCode = [
      addressWidget.get("locationLocality"),
      addressWidget.get("locationRegion"),
      addressWidget.get("locationPostalCode"),
    ];
  }

  const lines = [
    addressWidget.get("locationName"),
    addressWidget.get("locationStreetAddress"),
    localityRegionPostalCode.filter(n => n).join(" "),
    addressWidget.get("locationCountry"),
  ].filter(n => n);

  if (!lines.length) {
    return (
      <InPlaceEditingPlaceholder>
        Provide the location in the address widget properties.
      </InPlaceEditingPlaceholder>
    );
  }

  return (
    <p>
      {lines.map((line, index) => (
        <React.Fragment key={index}>
          {line}
          <br />
        </React.Fragment>
      ))}
    </p>
  );
});

function Table(props) {
  const lines = Object.entries(props).filter(([_prop, value]) => value);

  if (!lines.length) {
    return null;
  }

  return (
    <table>
      <tbody>
        {lines.map(([name, value]) => (
          <TableColumn key={name} name={name} value={value} />
        ))}
      </tbody>
    </table>
  );
}

const LOCALIZATION = {
  phone: "Phone",
  fax: "Fax",
  email: "Email",
};

const LINK_PREFIXES = {
  phone: "tel",
  fax: "fax",
  email: "mailto",
};

function TableColumn({ name, value }) {
  const prefix = LINK_PREFIXES[name];

  const href = prefix ? `${prefix}:${value}` : value;

  return (
    <tr>
      <td>{`${LOCALIZATION[name]}: `}</td>
      <td>
        <a href={href}>{value}</a>
      </td>
    </tr>
  );
}
