Scrivito.provideComponent('FactWidget', ({ widget }) =>
  <div className="fact">
    <Scrivito.ContentTag
      content={ widget }
      attribute="value"
      className="value"
      tag="span"
    />
    <Scrivito.ContentTag
      content={ widget }
      attribute="key"
      className="key"
      tag="span"
    />
  </div>
);
