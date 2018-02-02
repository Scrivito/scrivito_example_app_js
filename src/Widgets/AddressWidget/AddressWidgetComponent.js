import InPlaceEditingPlaceholder from 'Components/InPlaceEditingPlaceholder';
import SchemaDotOrg from 'Components/SchemaDotOrg';

const LOCALIZATION = {
  phone: 'Phone',
  mobile: 'Mobile',
  fax: 'Fax',
  eMail: 'E-Mail',
};

const LINK_PREFIXES = {
  phone: 'tel',
  mobile: 'tel',
  fax: 'fax',
  eMail: 'mailto',
};

Scrivito.provideComponent('AddressWidget', ({ widget }) => {
  return (
    <div>
      { widget.get('showLogo') !== 'no' && <Logo /> }
      <address>
        <Address addressWidget={ widget } />
        <Table
            phone={ widget.get('phone') }
            mobile={ widget.get('mobile') }
            fax={ widget.get('fax') }
            eMail={ widget.get('eMail') }
          />
        <SchemaDotOrg content={ widget } />
      </address>
      { widget.get('showBorderBottom') === 'yes' && <div className="border-bottom" /> }
    </div>
  );
});

const Logo = Scrivito.connect(() => {
  const root = Scrivito.Obj.root();
  if (!root) { return null; }

  const logo = root.get('logoDark');
  if (!logo) { return null; }

  return (
    <Scrivito.LinkTag to={ root }>
      <Scrivito.ImageTag content={ logo } className="logo" alt="Logo" />
    </Scrivito.LinkTag>
  );
});

const Address = Scrivito.connect(({ addressWidget }) => {
  const localityRegionPostalCode = [
    addressWidget.get('locationLocality'),
    addressWidget.get('locationRegion'),
    addressWidget.get('locationPostalCode'),
  ].filter(n => n).join(' ');

  const lines = [
    addressWidget.get('locationName'),
    addressWidget.get('locationStreetAddress'),
    localityRegionPostalCode,
    addressWidget.get('locationCountry'),
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
      {
        lines.map((line, index) =>
          <React.Fragment key={ index }>
            { line }
            <br />
          </React.Fragment>
        )
      }
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
        {
          lines.map(([name, value]) =>
            <TableColumn key={ name } name={ name } value={ value } />)
        }
      </tbody>
    </table>
  );
}

function TableColumn({ name, value }) {
  const prefix = LINK_PREFIXES[name];

  if (!value) {
    return null;
  }

  const href = prefix ? `${prefix}:${value}` : value;

  return (
    <tr>
      <td>{ `${LOCALIZATION[name]}: ` }</td>
      <td><a href={ href }>{ value }</a></td>
    </tr>
  );
}
