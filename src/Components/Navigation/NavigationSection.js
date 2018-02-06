import * as Scrivito from 'scrivito';

function NavigationSection({ heightClassName }) {
  if (heightClassName !== 'full-height') { return null; }

  if (!Scrivito.currentPage()) { return null; }
  const obj = Scrivito.currentPage();
  if (!obj.get('navigationSection')) { return null; }

  return <Scrivito.ContentTag
    tag="div"
    className="container"
    content={ obj }
    attribute="navigationSection"
  />;
}

export default Scrivito.connect(NavigationSection);
