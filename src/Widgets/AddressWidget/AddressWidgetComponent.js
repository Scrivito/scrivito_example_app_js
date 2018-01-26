import AddressListItemWidget from 'Widgets/AddressListItemWidget/AddressListItemWidgetClass';
import placeholderCss from 'utils/placeholderCss';

const AddRow = Scrivito.connect(({ widget }) => {
  if (!Scrivito.isInPlaceEditingActive()) { return null; }

  return (
    <tr>
      <td className="text-center" colSpan="2">
        <a
          href='#'
          style={ placeholderCss }
          onClick={
            e => {
              e.preventDefault();
              e.stopPropagation();

              const newListItems =
                [...widget.get('listItems'), new AddressListItemWidget({})];
              widget.update({ listItems: newListItems });
            }
          }
        >
          Click to add a row
        </a>
      </td>
    </tr>
  );
});

Scrivito.provideComponent('AddressWidget', ({ widget }) => {
  return (
    <div>
      { widget.get('showLogo') !== 'no' && <Logo /> }
      <address>
        <Scrivito.ContentTag content={ widget } attribute="address" />
        <table>
          <tbody>
            {
              widget.get('listItems').map((listItem, i) =>
                <tr key={ i }>
                  <Scrivito.ContentTag content={ listItem } attribute="key" tag="td" />
                  <Scrivito.ContentTag content={ listItem } attribute="value" tag="td" />
                </tr>
              )
            }
            <AddRow widget={ widget } />
          </tbody>
        </table>
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
